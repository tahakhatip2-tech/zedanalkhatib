import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Hammer, Shield, Star, Zap, Flame } from 'lucide-react';

export const ExpertProfile = () => {
    const { t, language } = useLanguage();

    const skills = [
        {
            icon: Hammer,
            title: t('الحدادة العربية والفرنجي', 'Arabic & European Blacksmithing'),
            desc: t('إتقان كافة أنواع الحدادة التقليدية والحديثة بأعلى معايير الجودة.', 'Mastery of all traditional and modern blacksmithing with top quality standards.')
        },
        {
            icon: GraduationCap,
            title: t('دبلوم هندسة الحدادة', 'Blacksmithing Engineering Diploma'),
            desc: t('تطبيق الأسس العلمية والهندسية في تصميم وتنفيذ المشغولات المعدنية.', 'Applying scientific and engineering principles in design and metalwork execution.')
        },
        {
            icon: Award,
            title: t('خبير ومعتمد', 'Certified Expert'),
            desc: t('خبرة طويلة في إدارة المشاريع الكبرى للمنازل والفلل والقصور.', 'Long experience in managing major projects for homes, villas, and palaces.')
        },
        {
            icon: Flame,
            title: t('تشكيل المعادن بالحرارة', 'Heat Metal Forming'),
            desc: t('تصميم يدوي فني فريد يعكس الأصالة والإبداع.', 'Unique manual artistic design reflecting authenticity and creativity.')
        }
    ];

    return (
        <section id="expert" className="py-24 relative overflow-hidden bg-background">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-8 text-center lg:text-right rtl:lg:text-right ltr:lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm uppercase tracking-wider">
                            <Star size={16} className="fill-current" />
                            {t('إدارة الخبراء', 'Expert Management')}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight" style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'inherit' }}>
                            {t('بادارة المحترف والخبير', 'Managed by the Expert')} <br />
                            <span className="text-primary">{t('زيدان الخطيب', 'Zaidan Al-Khatib')}</span>
                        </h2>

                        <div className="flex flex-col gap-4 text-gray-400 text-lg leading-relaxed">
                            <div className="flex items-center gap-3 justify-center lg:justify-start rtl:lg:justify-start ltr:lg:justify-start">
                                <Shield className="text-primary flex-shrink-0" />
                                <p>{t('حاصل على دبلوم هندسة الحدادة العربية والفرنجي', 'Holder of a Diploma in Arabic and European Blacksmithing Engineering')}</p>
                            </div>
                            <p>
                                {t(
                                    'يجمع السيد زيدان الخطيب بين الخبرة المتوارثة والأسس الهندسية الأكاديمية ليقدم لزبائننا قطعاً فنية تتجاوز مجرد كونها حديداً، بل هي تمثيل للأصالة والقوة.',
                                    'Mr. Zaidan Al-Khatib combines traditional heritage experience with academic engineering foundations to offer our clients artistic pieces that are more than just iron—they are representations of authenticity and strength.'
                                )}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                <span className="block text-3xl font-black text-white mb-1">30+</span>
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">{t('عاما من الخبرة', 'Years of Experience')}</span>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                <span className="block text-3xl font-black text-white mb-1">500+</span>
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">{t('مشروع منجز', 'Projects Done')}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Icon/Expert Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <skill.icon size={80} />
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary transition-colors group-hover:text-forge-dark">
                                    <skill.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'inherit' }}>
                                    {skill.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {skill.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
