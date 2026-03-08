import { Heart } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { FOOTER_LINKS, ICP_NUMBER } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <Container>
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="text-xl font-bold gradient-text">AI红娘</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                AI红娘是新一代智能婚恋匹配平台，融合大模型技术与专业服务，
                让每一次相遇都更加精准、自然。
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                {FOOTER_LINKS.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-primary-600 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">关于</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                {FOOTER_LINKS.about.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-primary-600 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                © 2026 AI红娘. All rights reserved.
              </p>
              <div className="text-sm text-gray-400">
                <span>ICP备案号：</span>
                <span className="text-primary-500">{ICP_NUMBER}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
