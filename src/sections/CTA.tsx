import { Button } from '../components/ui/Button';
import { Container } from '../components/layout/Container';

export const CTA = () => {
  return (
    <section className="py-20">
      <Container size="small">
        <div className="relative bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              开启你的AI匹配之旅
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              内测期间免费领取3个优质推荐名额，让AI红娘麦麦为你寻找那个TA
            </p>
            <Button variant="white" size="lg" className="shadow-lg">
              立即免费匹配
            </Button>
            <p className="text-white/70 text-sm mt-4">
              已有超过10,000+用户通过AI红娘麦麦找到心仪对象
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
