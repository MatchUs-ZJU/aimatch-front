import { ChevronRight } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { SectionTitle } from '../components/layout/SectionTitle';
import { Container } from '../components/layout/Container';
import { STEPS } from '../constants';

export const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionTitle
          title="简单三步，遇见"
          highlight="TA"
          subtitle="无需下载APP，通过企业微信即可享受专业红娘服务"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <div className="text-5xl font-bold text-primary-100 mb-6">
                  {item.step}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ChevronRight className="w-8 h-8 text-primary-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default HowItWorks;
