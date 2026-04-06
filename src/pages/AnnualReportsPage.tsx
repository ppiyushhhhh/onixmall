import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Building2, IndianRupee, Download, ChevronDown, ChevronUp, Leaf, Rocket, Trophy } from 'lucide-react';
import { annualReports } from '@/data/annualReports';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

const chartData = annualReports.map(r => ({
  year: r.year.toString(),
  revenue: r.revenue,
  cost: r.operationalCost,
  profit: r.netProfit,
  footfall: r.totalFootfall,
  malls: r.totalMalls,
}));

const AnnualReportsPage = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const report = annualReports.find(r => r.year === selectedYear)!;

  const handleDownload = () => {
    const text = `ONIX MALL INDIA — Annual Report ${report.year}\n\n` +
      `Revenue: ₹${report.revenue} Cr\nOperational Cost: ₹${report.operationalCost} Cr\nNet Profit: ₹${report.netProfit} Cr\n` +
      `Total Malls: ${report.totalMalls}\nAnnual Footfall: ${report.totalFootfall} Cr\n\n` +
      `HIGHLIGHTS:\n${report.highlights.map(h => `• ${h}`).join('\n')}\n\n` +
      `EXPANSIONS:\n${report.expansions.map(e => `• ${e}`).join('\n')}\n\n` +
      `SUSTAINABILITY:\n${report.sustainability.map(s => `• ${s}`).join('\n')}\n\n` +
      `FUTURE ROADMAP:\n${report.futureRoadmap.map(f => `• ${f}`).join('\n')}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Onix_Annual_Report_${report.year}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const summaryCards = [
    { label: 'Total Revenue', value: `₹${report.revenue} Cr`, icon: IndianRupee, sub: `+${report.year > 2022 ? Math.round(((report.revenue - annualReports.find(r => r.year === report.year - 1)!.revenue) / annualReports.find(r => r.year === report.year - 1)!.revenue) * 100) : 0}% YoY` },
    { label: 'Net Profit', value: `₹${report.netProfit} Cr`, icon: TrendingUp, sub: `Margin ${Math.round((report.netProfit / report.revenue) * 100)}%` },
    { label: 'Annual Footfall', value: `${report.totalFootfall} Cr`, icon: Users, sub: 'visitors across India' },
    { label: 'Total Malls', value: report.totalMalls.toString(), icon: Building2, sub: 'operational locations' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">Annual <span className="text-gradient-gold">Reports</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Transparent reporting of Onix Mall India's financial performance, growth milestones, and strategic vision.</p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center gap-3 mb-10">
          {annualReports.map(r => (
            <button
              key={r.year}
              onClick={() => setSelectedYear(r.year)}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${selectedYear === r.year ? 'bg-gradient-gold text-primary-foreground shadow-gold' : 'bg-card border border-border text-muted-foreground hover:text-foreground'}`}
            >
              {r.year}
            </button>
          ))}
        </div>

        <motion.div key={selectedYear} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {summaryCards.map((card, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">{card.label}</span>
                  <card.icon size={20} className="text-primary" />
                </div>
                <div className="text-2xl font-display text-foreground">{card.value}</div>
                <div className="text-xs text-primary mt-1">{card.sub}</div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-display text-lg text-foreground mb-4">Revenue & Profit Growth</h3>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 8%, 18%)" />
                  <XAxis dataKey="year" stroke="hsl(30, 10%, 55%)" fontSize={12} />
                  <YAxis stroke="hsl(30, 10%, 55%)" fontSize={12} tickFormatter={v => `₹${v}Cr`} />
                  <Tooltip contentStyle={{ background: 'hsl(30, 8%, 8%)', border: '1px solid hsl(30, 8%, 18%)', borderRadius: '8px', color: 'hsl(40, 20%, 92%)' }} />
                  <Bar dataKey="revenue" fill="hsl(43, 72%, 52%)" radius={[4, 4, 0, 0]} name="Revenue" />
                  <Bar dataKey="profit" fill="hsl(43, 80%, 65%)" radius={[4, 4, 0, 0]} name="Profit" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-display text-lg text-foreground mb-4">Footfall Trend (Cr visitors)</h3>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 8%, 18%)" />
                  <XAxis dataKey="year" stroke="hsl(30, 10%, 55%)" fontSize={12} />
                  <YAxis stroke="hsl(30, 10%, 55%)" fontSize={12} />
                  <Tooltip contentStyle={{ background: 'hsl(30, 8%, 8%)', border: '1px solid hsl(30, 8%, 18%)', borderRadius: '8px', color: 'hsl(40, 20%, 92%)' }} />
                  <Area type="monotone" dataKey="footfall" stroke="hsl(43, 72%, 52%)" fill="hsl(43, 72%, 52%)" fillOpacity={0.15} strokeWidth={2} name="Footfall" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Details Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailSection icon={Trophy} title="Major Achievements" items={report.highlights} />
            <DetailSection icon={Building2} title="Expansion Highlights" items={report.expansions} />
            <DetailSection icon={Leaf} title="Sustainability Initiatives" items={report.sustainability} />
            <DetailSection icon={Rocket} title="Future Roadmap" items={report.futureRoadmap} />
          </div>

          {/* Download */}
          <div className="text-center">
            <button onClick={handleDownload} className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity shadow-gold">
              <Download size={18} /> Download Report ({selectedYear})
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const DetailSection = ({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) => (
  <div className="bg-card rounded-lg border border-border p-5">
    <div className="flex items-center gap-2 mb-4">
      <Icon size={18} className="text-primary" />
      <h3 className="font-display text-lg text-foreground">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="text-primary mt-1">•</span> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default AnnualReportsPage;
