import { Briefcase, Star, BookOpen, Users, Phone } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  bio: string;
  phone: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
  {
    name: 'Rupesh Kumar',
    role: 'Founder & Master Craftsman',
    experience: '25+ Years',
    specialization: 'Custom Design & Quality Control',
    phone: '9899259454',
    bio: 'Rupesh founded Krishan Stamps with a vision to blend traditional craftsmanship with modern efficiency. His expertise in custom stamp design and quality control ensures every product meets the highest standards.'
  },
  {
    name: 'Krishan Kumar',
    role: 'Technical Director',
    experience: '23+ Years',
    specialization: 'Precision Engineering & Production',
    phone: '9953206792',
    bio: 'Krishan oversees all technical aspects of production, ensuring precision and consistency across all orders. His engineering background brings innovation to traditional stamp-making processes.'
  },
  {
    name: 'Rahul Kumar',
    role: 'Customer Relations Manager',
    experience: '23+ Years',
    specialization: 'Client Consultation & Project Management',
    phone: '9625495373',
    bio: 'Rahul is the bridge between our customers and our production team. His expertise in understanding client needs and managing projects ensures smooth execution and customer satisfaction.'
  }];


  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Meet Our Expert Team
          </h2>
          <p className="font-body text-lg text-text-secondary">
            The skilled professionals behind every perfect stamp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 p-6">
                <h3 className="font-headline font-bold text-2xl text-primary mb-2">
                  {member.name}
                </h3>
                <p className="font-body text-sm text-text-secondary font-semibold">{member.role}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Briefcase size={18} className="text-primary" />
                    <span className="font-body text-sm font-semibold text-text-primary">
                      {member.experience}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star size={18} className="text-warning fill-current" />
                    <span className="font-body text-sm font-semibold text-text-primary">Expert</span>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <BookOpen size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-body text-xs font-semibold text-primary mb-1">
                        Specialization
                      </div>
                      <div className="font-body text-sm text-text-secondary">
                        {member.specialization}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {member.bio}
                </p>

                <div className="border-t border-border/30 pt-4 mt-4">
                  <a 
                    href={`tel:+91${member.phone}`}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone size={16} />
                    <span className="font-body text-sm font-semibold">+91-{member.phone.slice(0, 5)}-{member.phone.slice(5)}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 text-center">
          <Users size={48} className="text-primary mx-auto mb-4" />
          <h3 className="font-headline font-bold text-2xl text-text-primary mb-3">
            A Team United by Excellence
          </h3>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Our team brings together decades of combined experience in stamp making, design, and customer service. We work collaboratively to ensure every project receives the attention and expertise it deserves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;