import { motion } from 'framer-motion';
import { boardMembers, type BoardMember } from '@/data/board';

interface BoardOfDirectorsProps {
  members?: BoardMember[];
  title?: string;
  subtitle?: string;
}

const BoardOfDirectors = ({
  members = boardMembers,
  title = 'Board of Directors',
  subtitle = 'Meet the leadership shaping the future of Onix Mall India.',
}: BoardOfDirectorsProps) => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-14">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
          {title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-gradient-gold">{title.split(' ').slice(-1)}</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((m, i) => (
          <motion.article
            key={m.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="group bg-card rounded-2xl border border-border overflow-hidden text-center shadow-sm hover:shadow-gold hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden bg-secondary">
              <img
                src={m.image}
                alt={`${m.name}, ${m.role}`}
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                {m.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-primary/90 mt-1">
                {m.role}
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {m.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BoardOfDirectors;
