import { useState } from "react";
import { 
  Key, 
  BarChart3, 
  CreditCard, 
  Settings, 
  Mic, 
  FileText, 
  Copy,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  Activity
} from "lucide-react";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { LuxuryCard, LuxuryCardContent, LuxuryCardHeader, LuxuryCardTitle } from "@/components/ui/luxury-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Dashboard = () => {
  const [apiKeys, setApiKeys] = useState([
    { id: "1", name: "Production API", key: "lex_prod_sk_1234567890abcdef", masked: true, created: "2024-01-15" },
    { id: "2", name: "Development API", key: "lex_dev_sk_abcdef1234567890", masked: true, created: "2024-01-10" }
  ]);

  const toggleKeyVisibility = (id: string) => {
    setApiKeys(keys => keys.map(key => 
      key.id === id ? { ...key, masked: !key.masked } : key
    ));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you'd show a toast notification here
  };

  const stats = [
    { 
      title: "API Calls This Month", 
      value: "4,823", 
      change: "+12.5%", 
      icon: Activity,
      color: "text-success"
    },
    { 
      title: "Usage Limit", 
      value: "80%", 
      change: "8,000 / 10,000", 
      icon: BarChart3,
      color: "text-warning"
    },
    { 
      title: "Current Plan", 
      value: "Professional", 
      change: "Next billing: Jan 28", 
      icon: CreditCard,
      color: "text-gold"
    },
    { 
      title: "Active Models", 
      value: "2", 
      change: "Whisper STT, Legal AI", 
      icon: Settings,
      color: "text-primary"
    }
  ];

  const models = [
    {
      name: "Whisper STT",
      description: "Speech-to-text transcription with 99.5% accuracy",
      status: "Active",
      icon: Mic,
      usage: "2,143 calls"
    },
    {
      name: "Legal Summarizer",
      description: "AI-powered legal document analysis and summarization",
      status: "Active", 
      icon: FileText,
      usage: "1,680 calls"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header */}
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage your AI platform and monitor usage</p>
            </div>
            <LuxuryButton variant="hero" size="lg">
              <Plus className="w-4 h-4 mr-2" />
              Generate API Key
            </LuxuryButton>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <LuxuryCard 
                key={stat.title} 
                variant="glass" 
                className={`hover-lift animate-fade-in delay-${index * 100}`}
              >
                <LuxuryCardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      <p className={`text-xs mt-1 ${stat.color}`}>{stat.change}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-luxury flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </LuxuryCardContent>
              </LuxuryCard>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* API Keys Management */}
          <LuxuryCard variant="glass" className="animate-fade-in delay-200">
            <LuxuryCardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-luxury flex items-center justify-center">
                  <Key className="w-5 h-5 text-white" />
                </div>
                <LuxuryCardTitle>API Keys</LuxuryCardTitle>
              </div>
            </LuxuryCardHeader>
            <LuxuryCardContent className="space-y-4">
              {apiKeys.map((apiKey) => (
                <div key={apiKey.id} className="p-4 rounded-xl border border-border bg-background/50">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{apiKey.name}</h4>
                      <p className="text-xs text-muted-foreground">Created {apiKey.created}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuxuryButton
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleKeyVisibility(apiKey.id)}
                      >
                        {apiKey.masked ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </LuxuryButton>
                      <LuxuryButton
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(apiKey.key)}
                      >
                        <Copy className="w-4 h-4" />
                      </LuxuryButton>
                      <LuxuryButton
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </LuxuryButton>
                    </div>
                  </div>
                  <div className="font-mono text-sm bg-muted/50 p-2 rounded border">
                    {apiKey.masked 
                      ? apiKey.key.slice(0, 12) + "••••••••••••••••" + apiKey.key.slice(-4)
                      : apiKey.key
                    }
                  </div>
                </div>
              ))}
              
              <LuxuryButton variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Generate New Key
              </LuxuryButton>
            </LuxuryCardContent>
          </LuxuryCard>

          {/* AI Models */}
          <LuxuryCard variant="glass" className="animate-fade-in delay-300">
            <LuxuryCardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-luxury flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <LuxuryCardTitle>AI Models</LuxuryCardTitle>
              </div>
            </LuxuryCardHeader>
            <LuxuryCardContent className="space-y-4">
              {models.map((model) => {
                const Icon = model.icon;
                return (
                  <div key={model.name} className="p-4 rounded-xl border border-border bg-background/50">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-luxury flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">{model.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{model.description}</p>
                          <p className="text-xs text-gold mt-2">{model.usage} this month</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-success"></div>
                        <span className="text-xs text-success">{model.status}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <LuxuryButton variant="outline" className="w-full">
                Browse Model Library
              </LuxuryButton>
            </LuxuryCardContent>
          </LuxuryCard>
        </div>

        {/* Usage Analytics */}
        <LuxuryCard variant="glass" className="animate-fade-in delay-400">
          <LuxuryCardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-luxury flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <LuxuryCardTitle>Usage Analytics</LuxuryCardTitle>
            </div>
          </LuxuryCardHeader>
          <LuxuryCardContent>
            <div className="h-64 flex items-center justify-center border border-border/50 rounded-xl bg-muted/20">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Analytics chart will be rendered here</p>
                <p className="text-sm text-muted-foreground">Real-time usage data and insights</p>
              </div>
            </div>
          </LuxuryCardContent>
        </LuxuryCard>
      </div>
    </div>
  );
};

export default Dashboard;