import { Section } from '../components/layout/Section';
import { SectionTitle } from '../components/layout/SectionTitle';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { FEATURES } from '../constants';

export const Features = () => {
  return (
    <Section id="features" gradient>
      <Container>
        <SectionTitle
          title="为什么选择 "
          highlight="AI红娘麦麦"
          subtitle="融合先进AI技术与专业婚恋服务理念，为你打造前所未有的智能匹配体验"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <Card key={index}>
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features;
