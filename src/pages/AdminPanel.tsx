import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Building2, Users, AlertTriangle, TrendingUp, DollarSign, Zap, MessageSquare, ShoppingBag, Calendar, Settings, LogOut, Menu, X } from 'lucide-react';
import { malls, events } from '@/data/malls';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const footfallData = [
  { month: 'Jan', visitors: 1200000 }, { month: 'Feb', visitors: 1350000 }, { month: 'Mar', visitors: 1500000 },
  { month: 'Apr', visitors: 1400000 }, { month: 'May', visitors: 1250000 }, { month: 'Jun', visitors: 1100000 },
  { month: 'Jul', visitors: 1300000 }, { month: 'Aug', visitors: 1450000 }, { month: 'Sep', visitors: 1600000 },
  { month: 'Oct', visitors: 1800000 }, { month: 'Nov', visitors: 2000000 }, { month: 'Dec', visitors: 2200000 },
];

const revenueData = [
  { category: 'Rent', value: 45 }, { category: 'Advertising', value: 20 },
  { category: 'Events', value: 15 }, { category: 'Parking', value: 12 }, { category: 'Other', value: 8 },
];

const COLORS = ['hsl(43, 72%, 52%)', 'hsl(43, 80%, 65%)', 'hsl(43, 65%, 38%)', 'hsl(30, 8%, 30%)', 'hsl(30, 8%, 50%)'];

const complaints = [
  { id: 1, user: 'Rajesh K.', mall: 'Mumbai', category: 'Cleanliness', status: 'Pending', date: '2026-04-01' },
  { id: 2, user: 'Priya S.', mall: 'Delhi', category: 'Parking', status: 'In Progress', date: '2026-03-30' },
  { id: 3, user: 'Ankit M.', mall: 'Bengaluru', category: 'Staff Behavior', status: 'Resolved', date: '2026-03-28' },
  { id: 4, user: 'Sneha R.', mall: 'Hyderabad', category: 'Facilities', status: 'Pending', date: '2026-04-02' },
  { id: 5, user: 'Vikram P.', mall: 'Chennai', category: 'Safety', status: 'In Progress', date: '2026-03-29' },
];

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { key: 'malls', label: 'Malls', icon: Building2 },
    { key: 'complaints', label: 'Complaints', icon: AlertTriangle },
    { key: 'events', label: 'Events', icon: Calendar },
    { key: 'analytics', label: 'Analytics', icon: TrendingUp },
  ];

  const statCards = [
    { label: 'Total Malls', value: '20', icon: Building2, change: '+2 this year' },
    { label: 'Monthly Visitors', value: '1.5Cr', icon: Users, change: '+12% vs last month' },
    { label: 'Revenue (Monthly)', value: '₹85Cr', icon: DollarSign, change: '+8% growth' },
    { label: 'Active Complaints', value: '23', icon: AlertTriangle, change: '-5 from last week' },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 flex">
      {/* Sidebar */}
      <aside className={`fixed md:sticky top-16 md:top-20 left-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-64 bg-card border-r border-border z-20 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-4 space-y-1">
          {sidebarItems.map(item => (
            <button
              key={item.key}
              onClick={() => { setActiveSection(item.key); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${activeSection === item.key ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}`}
            >
              <item.icon size={18} /> {item.label}
            </button>
          ))}
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="fixed bottom-4 left-4 md:hidden z-30 bg-primary text-primary-foreground p-3 rounded-full shadow-gold">
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 min-w-0">
        {activeSection === 'dashboard' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Admin <span className="text-gradient-gold">Dashboard</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {statCards.map((stat, i) => (
                <div key={i} className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <stat.icon size={20} className="text-primary" />
                  </div>
                  <div className="text-2xl font-display text-foreground">{stat.value}</div>
                  <div className="text-xs text-primary mt-1">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg border border-border p-5">
                <h3 className="font-display text-lg text-foreground mb-4">Monthly Footfall Trend</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={footfallData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 8%, 18%)" />
                    <XAxis dataKey="month" stroke="hsl(30, 10%, 55%)" fontSize={12} />
                    <YAxis stroke="hsl(30, 10%, 55%)" fontSize={12} tickFormatter={v => `${(v / 1000000).toFixed(1)}M`} />
                    <Tooltip contentStyle={{ background: 'hsl(30, 8%, 8%)', border: '1px solid hsl(30, 8%, 18%)', borderRadius: '8px', color: 'hsl(40, 20%, 92%)' }} />
                    <Line type="monotone" dataKey="visitors" stroke="hsl(43, 72%, 52%)" strokeWidth={2} dot={{ fill: 'hsl(43, 72%, 52%)' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-card rounded-lg border border-border p-5">
                <h3 className="font-display text-lg text-foreground mb-4">Revenue Breakdown</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={revenueData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label={({ category, value }) => `${category} ${value}%`} fontSize={11}>
                      {revenueData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: 'hsl(30, 8%, 8%)', border: '1px solid hsl(30, 8%, 18%)', borderRadius: '8px', color: 'hsl(40, 20%, 92%)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Complaints */}
            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-display text-lg text-foreground mb-4">Recent Complaints</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground">
                      <th className="text-left py-2 px-3">User</th>
                      <th className="text-left py-2 px-3">Mall</th>
                      <th className="text-left py-2 px-3">Category</th>
                      <th className="text-left py-2 px-3">Status</th>
                      <th className="text-left py-2 px-3">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.map(c => (
                      <tr key={c.id} className="border-b border-border/50 hover:bg-muted/20">
                        <td className="py-2 px-3 text-foreground">{c.user}</td>
                        <td className="py-2 px-3 text-muted-foreground">{c.mall}</td>
                        <td className="py-2 px-3 text-muted-foreground">{c.category}</td>
                        <td className="py-2 px-3">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.status === 'Resolved' ? 'bg-green-500/10 text-green-400' : c.status === 'In Progress' ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
                            {c.status}
                          </span>
                        </td>
                        <td className="py-2 px-3 text-muted-foreground">{c.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {activeSection === 'malls' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Mall <span className="text-gradient-gold">Management</span></h1>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-card rounded-lg border border-border">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="text-left py-3 px-4">Mall</th>
                    <th className="text-left py-3 px-4">City</th>
                    <th className="text-left py-3 px-4">Stores</th>
                    <th className="text-left py-3 px-4">Rating</th>
                    <th className="text-left py-3 px-4">Footfall</th>
                  </tr>
                </thead>
                <tbody>
                  {malls.map(m => (
                    <tr key={m.id} className="border-b border-border/50 hover:bg-muted/20">
                      <td className="py-3 px-4 text-foreground font-medium">{m.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{m.city}</td>
                      <td className="py-3 px-4 text-muted-foreground">{m.storeCount}</td>
                      <td className="py-3 px-4 text-primary">{m.rating}</td>
                      <td className="py-3 px-4 text-muted-foreground">{m.monthlyFootfall}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeSection === 'complaints' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Complaint <span className="text-gradient-gold">Management</span></h1>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-card rounded-lg border border-border p-4 text-center">
                <div className="text-2xl font-display text-destructive">8</div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </div>
              <div className="bg-card rounded-lg border border-border p-4 text-center">
                <div className="text-2xl font-display text-primary">10</div>
                <div className="text-xs text-muted-foreground">In Progress</div>
              </div>
              <div className="bg-card rounded-lg border border-border p-4 text-center">
                <div className="text-2xl font-display text-green-400">5</div>
                <div className="text-xs text-muted-foreground">Resolved</div>
              </div>
            </div>
            <div className="bg-card rounded-lg border border-border p-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="text-left py-2 px-3">ID</th>
                    <th className="text-left py-2 px-3">User</th>
                    <th className="text-left py-2 px-3">Mall</th>
                    <th className="text-left py-2 px-3">Category</th>
                    <th className="text-left py-2 px-3">Status</th>
                    <th className="text-left py-2 px-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map(c => (
                    <tr key={c.id} className="border-b border-border/50 hover:bg-muted/20">
                      <td className="py-2 px-3 text-foreground">#{c.id}</td>
                      <td className="py-2 px-3 text-foreground">{c.user}</td>
                      <td className="py-2 px-3 text-muted-foreground">{c.mall}</td>
                      <td className="py-2 px-3 text-muted-foreground">{c.category}</td>
                      <td className="py-2 px-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.status === 'Resolved' ? 'bg-green-500/10 text-green-400' : c.status === 'In Progress' ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-muted-foreground">{c.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeSection === 'events' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Event <span className="text-gradient-gold">Management</span></h1>
            <div className="space-y-4">
              {events.map(event => (
                <div key={event.id} className="bg-card rounded-lg border border-border p-5 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${event.status === 'upcoming' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        {event.status}
                      </span>
                      <span className="text-xs text-muted-foreground">{event.category}</span>
                    </div>
                    <h3 className="text-foreground font-medium">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.mallName} · {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'analytics' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Operations <span className="text-gradient-gold">Analytics</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card rounded-lg border border-border p-5">
                <div className="text-sm text-muted-foreground mb-1">Annual Budget (All Malls)</div>
                <div className="text-2xl font-display text-foreground">₹1,200 Cr</div>
              </div>
              <div className="bg-card rounded-lg border border-border p-5">
                <div className="text-sm text-muted-foreground mb-1">Monthly Maintenance</div>
                <div className="text-2xl font-display text-foreground">₹18 Cr</div>
              </div>
              <div className="bg-card rounded-lg border border-border p-5">
                <div className="text-sm text-muted-foreground mb-1">Energy Consumption</div>
                <div className="text-2xl font-display text-foreground">4.2 MW</div>
                <div className="text-xs text-primary">35% from solar</div>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-display text-lg text-foreground mb-4">Footfall by Mall (Top 10)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={malls.slice(0, 10).map(m => ({ name: m.city, footfall: parseInt(m.monthlyFootfall.replace(/,/g, '')) }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 8%, 18%)" />
                  <XAxis dataKey="name" stroke="hsl(30, 10%, 55%)" fontSize={11} />
                  <YAxis stroke="hsl(30, 10%, 55%)" fontSize={11} tickFormatter={v => `${(v / 100000).toFixed(0)}L`} />
                  <Tooltip contentStyle={{ background: 'hsl(30, 8%, 8%)', border: '1px solid hsl(30, 8%, 18%)', borderRadius: '8px', color: 'hsl(40, 20%, 92%)' }} />
                  <Bar dataKey="footfall" fill="hsl(43, 72%, 52%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Popular Malls */}
            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-display text-lg text-foreground mb-4">Most Popular Malls</h3>
              <div className="space-y-3">
                {malls.sort((a, b) => b.rating - a.rating).slice(0, 5).map((m, i) => (
                  <div key={m.id} className="flex items-center gap-4">
                    <span className="text-lg font-display text-primary w-6">#{i + 1}</span>
                    <div className="flex-1">
                      <div className="text-sm text-foreground font-medium">{m.name}</div>
                      <div className="text-xs text-muted-foreground">{m.city}</div>
                    </div>
                    <div className="text-sm text-primary font-medium">★ {m.rating}</div>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-gradient-gold h-2 rounded-full" style={{ width: `${(m.rating / 5) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
