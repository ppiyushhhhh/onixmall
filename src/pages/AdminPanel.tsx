import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Building2, Users, AlertTriangle, TrendingUp, DollarSign, Menu, X, Calendar, FileText, Handshake, Briefcase, UserCheck } from 'lucide-react';
import { malls, events } from '@/data/malls';
import { annualReports } from '@/data/annualReports';
import { sampleInquiries } from '@/data/leasingInquiries';
import { jobs, sampleApplications } from '@/data/careers';
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

const statusBadge = (status: string) => {
  const map: Record<string, string> = {
    'Pending': 'bg-destructive/10 text-destructive', 'In Progress': 'bg-primary/10 text-primary', 'Resolved': 'bg-green-500/10 text-green-400',
    'New': 'bg-blue-500/10 text-blue-400', 'Contacted': 'bg-primary/10 text-primary', 'Approved': 'bg-green-500/10 text-green-400', 'Rejected': 'bg-destructive/10 text-destructive',
    'Shortlisted': 'bg-primary/10 text-primary', 'Hired': 'bg-green-500/10 text-green-400', 'Open': 'bg-green-500/10 text-green-400', 'Closed': 'bg-muted text-muted-foreground',
  };
  return <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${map[status] || 'bg-muted text-muted-foreground'}`}>{status}</span>;
};

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { key: 'malls', label: 'Malls', icon: Building2 },
    { key: 'complaints', label: 'Complaints', icon: AlertTriangle },
    { key: 'events', label: 'Events', icon: Calendar },
    { key: 'analytics', label: 'Analytics', icon: TrendingUp },
    { key: 'reports', label: 'Annual Reports', icon: FileText },
    { key: 'leasing', label: 'Leasing Inquiries', icon: Handshake },
    { key: 'jobs', label: 'Job Postings', icon: Briefcase },
    { key: 'applications', label: 'Applications', icon: UserCheck },
  ];

  const statCards = [
    { label: 'Total Malls', value: '20', icon: Building2, change: '+2 this year' },
    { label: 'Monthly Visitors', value: '1.5Cr', icon: Users, change: '+12% vs last month' },
    { label: 'Revenue (Monthly)', value: '₹85Cr', icon: DollarSign, change: '+8% growth' },
    { label: 'Active Complaints', value: '23', icon: AlertTriangle, change: '-5 from last week' },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 flex">
      <aside className={`fixed md:sticky top-16 md:top-20 left-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-64 bg-card border-r border-border z-20 transition-transform overflow-y-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-4 space-y-1">
          {sidebarItems.map(item => (
            <button key={item.key} onClick={() => { setActiveSection(item.key); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${activeSection === item.key ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}`}>
              <item.icon size={18} /> {item.label}
            </button>
          ))}
        </div>
      </aside>

      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="fixed bottom-4 left-4 md:hidden z-30 bg-primary text-primary-foreground p-3 rounded-full shadow-gold">
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <main className="flex-1 p-4 md:p-8 min-w-0">
        {/* Dashboard */}
        {activeSection === 'dashboard' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Admin <span className="text-gradient-gold">Dashboard</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {statCards.map((stat, i) => (
                <div key={i} className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center justify-between mb-3"><span className="text-sm text-muted-foreground">{stat.label}</span><stat.icon size={20} className="text-primary" /></div>
                  <div className="text-2xl font-display text-foreground">{stat.value}</div>
                  <div className="text-xs text-primary mt-1">{stat.change}</div>
                </div>
              ))}
            </div>
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
            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-display text-lg text-foreground mb-4">Recent Complaints</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-border text-muted-foreground"><th className="text-left py-2 px-3">User</th><th className="text-left py-2 px-3">Mall</th><th className="text-left py-2 px-3">Category</th><th className="text-left py-2 px-3">Status</th><th className="text-left py-2 px-3">Date</th></tr></thead>
                  <tbody>{complaints.map(c => (
                    <tr key={c.id} className="border-b border-border/50 hover:bg-muted/20">
                      <td className="py-2 px-3 text-foreground">{c.user}</td><td className="py-2 px-3 text-muted-foreground">{c.mall}</td><td className="py-2 px-3 text-muted-foreground">{c.category}</td>
                      <td className="py-2 px-3">{statusBadge(c.status)}</td><td className="py-2 px-3 text-muted-foreground">{c.date}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Malls */}
        {activeSection === 'malls' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Mall <span className="text-gradient-gold">Management</span></h1>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-card rounded-lg border border-border">
                <thead><tr className="border-b border-border text-muted-foreground"><th className="text-left py-3 px-4">Mall</th><th className="text-left py-3 px-4">City</th><th className="text-left py-3 px-4">Stores</th><th className="text-left py-3 px-4">Rating</th><th className="text-left py-3 px-4">Footfall</th></tr></thead>
                <tbody>{malls.map(m => (
                  <tr key={m.id} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-3 px-4 text-foreground font-medium">{m.name}</td><td className="py-3 px-4 text-muted-foreground">{m.city}</td>
                    <td className="py-3 px-4 text-muted-foreground">{m.storeCount}</td><td className="py-3 px-4 text-primary">{m.rating}</td><td className="py-3 px-4 text-muted-foreground">{m.monthlyFootfall}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Complaints */}
        {activeSection === 'complaints' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Complaint <span className="text-gradient-gold">Management</span></h1>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-card rounded-lg border border-border p-4 text-center"><div className="text-2xl font-display text-destructive">8</div><div className="text-xs text-muted-foreground">Pending</div></div>
              <div className="bg-card rounded-lg border border-border p-4 text-center"><div className="text-2xl font-display text-primary">10</div><div className="text-xs text-muted-foreground">In Progress</div></div>
              <div className="bg-card rounded-lg border border-border p-4 text-center"><div className="text-2xl font-display text-green-400">5</div><div className="text-xs text-muted-foreground">Resolved</div></div>
            </div>
            <div className="bg-card rounded-lg border border-border p-5">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-border text-muted-foreground"><th className="text-left py-2 px-3">ID</th><th className="text-left py-2 px-3">User</th><th className="text-left py-2 px-3">Mall</th><th className="text-left py-2 px-3">Category</th><th className="text-left py-2 px-3">Status</th><th className="text-left py-2 px-3">Date</th></tr></thead>
                <tbody>{complaints.map(c => (
                  <tr key={c.id} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-2 px-3 text-foreground">#{c.id}</td><td className="py-2 px-3 text-foreground">{c.user}</td><td className="py-2 px-3 text-muted-foreground">{c.mall}</td>
                    <td className="py-2 px-3 text-muted-foreground">{c.category}</td><td className="py-2 px-3">{statusBadge(c.status)}</td><td className="py-2 px-3 text-muted-foreground">{c.date}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Events */}
        {activeSection === 'events' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Event <span className="text-gradient-gold">Management</span></h1>
            <div className="space-y-4">
              {events.map(event => (
                <div key={event.id} className="bg-card rounded-lg border border-border p-5 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${event.status === 'upcoming' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>{event.status}</span>
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

        {/* Analytics */}
        {activeSection === 'analytics' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Operations <span className="text-gradient-gold">Analytics</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card rounded-lg border border-border p-5"><div className="text-sm text-muted-foreground mb-1">Annual Budget</div><div className="text-2xl font-display text-foreground">₹1,200 Cr</div></div>
              <div className="bg-card rounded-lg border border-border p-5"><div className="text-sm text-muted-foreground mb-1">Monthly Maintenance</div><div className="text-2xl font-display text-foreground">₹18 Cr</div></div>
              <div className="bg-card rounded-lg border border-border p-5"><div className="text-sm text-muted-foreground mb-1">Energy Consumption</div><div className="text-2xl font-display text-foreground">4.2 MW</div><div className="text-xs text-primary">35% from solar</div></div>
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
          </motion.div>
        )}

        {/* Annual Reports Management */}
        {activeSection === 'reports' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Annual Report <span className="text-gradient-gold">Management</span></h1>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-card rounded-lg border border-border">
                <thead><tr className="border-b border-border text-muted-foreground"><th className="text-left py-3 px-4">Year</th><th className="text-left py-3 px-4">Revenue</th><th className="text-left py-3 px-4">Net Profit</th><th className="text-left py-3 px-4">Footfall</th><th className="text-left py-3 px-4">Malls</th><th className="text-left py-3 px-4">Actions</th></tr></thead>
                <tbody>{annualReports.map(r => (
                  <tr key={r.year} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-3 px-4 text-foreground font-display">{r.year}</td>
                    <td className="py-3 px-4 text-primary font-medium">₹{r.revenue} Cr</td>
                    <td className="py-3 px-4 text-green-400">₹{r.netProfit} Cr</td>
                    <td className="py-3 px-4 text-muted-foreground">{r.totalFootfall} Cr</td>
                    <td className="py-3 px-4 text-muted-foreground">{r.totalMalls}</td>
                    <td className="py-3 px-4"><button className="text-xs text-primary hover:underline">Edit</button> · <button className="text-xs text-destructive hover:underline">Delete</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Leasing Inquiries Management */}
        {activeSection === 'leasing' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Leasing <span className="text-gradient-gold">Inquiries</span></h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['New', 'Contacted', 'Approved', 'Rejected'].map(status => (
                <div key={status} className="bg-card rounded-lg border border-border p-4 text-center">
                  <div className="text-2xl font-display text-foreground">{sampleInquiries.filter(i => i.status === status).length}</div>
                  <div className="text-xs text-muted-foreground">{status}</div>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-card rounded-lg border border-border">
                <thead><tr className="border-b border-border text-muted-foreground"><th className="text-left py-3 px-4">Company</th><th className="text-left py-3 px-4">Contact</th><th className="text-left py-3 px-4">Mall</th><th className="text-left py-3 px-4">Category</th><th className="text-left py-3 px-4">Budget</th><th className="text-left py-3 px-4">Status</th><th className="text-left py-3 px-4">Date</th></tr></thead>
                <tbody>{sampleInquiries.map(inq => (
                  <tr key={inq.id} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-3 px-4 text-foreground font-medium">{inq.companyName}</td>
                    <td className="py-3 px-4 text-muted-foreground"><div>{inq.contactPerson}</div><div className="text-xs">{inq.email}</div></td>
                    <td className="py-3 px-4 text-muted-foreground capitalize">{inq.preferredMall}</td>
                    <td className="py-3 px-4 text-muted-foreground">{inq.businessCategory}</td>
                    <td className="py-3 px-4 text-muted-foreground">{inq.budgetRange}</td>
                    <td className="py-3 px-4">{statusBadge(inq.status)}</td>
                    <td className="py-3 px-4 text-muted-foreground">{inq.submittedDate}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Job Postings Management */}
        {activeSection === 'jobs' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="font-display text-3xl text-foreground">Job <span className="text-gradient-gold">Postings</span></h1>
              <button className="bg-gradient-gold text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 shadow-gold">+ New Job</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-card rounded-lg border border-border">
                <thead><tr className="border-b border-border text-muted-foreground"><th className="text-left py-3 px-4">Title</th><th className="text-left py-3 px-4">Location</th><th className="text-left py-3 px-4">Department</th><th className="text-left py-3 px-4">Experience</th><th className="text-left py-3 px-4">Salary</th><th className="text-left py-3 px-4">Status</th><th className="text-left py-3 px-4">Actions</th></tr></thead>
                <tbody>{jobs.map(job => (
                  <tr key={job.id} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-3 px-4 text-foreground font-medium">{job.title}</td>
                    <td className="py-3 px-4 text-muted-foreground">{job.location}</td>
                    <td className="py-3 px-4 text-muted-foreground">{job.department}</td>
                    <td className="py-3 px-4 text-muted-foreground">{job.experience}</td>
                    <td className="py-3 px-4 text-muted-foreground">{job.salaryRange}</td>
                    <td className="py-3 px-4">{statusBadge(job.status)}</td>
                    <td className="py-3 px-4"><button className="text-xs text-primary hover:underline">Edit</button> · <button className="text-xs text-destructive hover:underline">Delete</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Applications Management */}
        {activeSection === 'applications' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="font-display text-3xl text-foreground">Job <span className="text-gradient-gold">Applications</span></h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['New', 'Shortlisted', 'Hired', 'Rejected'].map(status => (
                <div key={status} className="bg-card rounded-lg border border-border p-4 text-center">
                  <div className="text-2xl font-display text-foreground">{sampleApplications.filter(a => a.status === status).length}</div>
                  <div className="text-xs text-muted-foreground">{status}</div>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-card rounded-lg border border-border">
                <thead><tr className="border-b border-border text-muted-foreground"><th className="text-left py-3 px-4">Candidate</th><th className="text-left py-3 px-4">Position</th><th className="text-left py-3 px-4">Email</th><th className="text-left py-3 px-4">Resume</th><th className="text-left py-3 px-4">Applied</th><th className="text-left py-3 px-4">Status</th></tr></thead>
                <tbody>{sampleApplications.map(app => (
                  <tr key={app.id} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-3 px-4 text-foreground font-medium">{app.name}</td>
                    <td className="py-3 px-4 text-muted-foreground">{app.jobTitle}</td>
                    <td className="py-3 px-4 text-muted-foreground">{app.email}</td>
                    <td className="py-3 px-4"><span className="text-xs text-primary hover:underline cursor-pointer">{app.resumeFileName}</span></td>
                    <td className="py-3 px-4 text-muted-foreground">{app.appliedDate}</td>
                    <td className="py-3 px-4">{statusBadge(app.status)}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
