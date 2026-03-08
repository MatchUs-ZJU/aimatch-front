import { Heart, Star } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { DEMO_MESSAGES, DEMO_FEATURES } from '../constants';

export const Demo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-secondary-50/20 to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              自然对话，<span className="gradient-text">智能理解</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              不用再苦恼如何填写复杂的择偶标准表格。只需像和朋友聊天一样，
              用自然的语言描述你心中的理想对象，AI红娘就能精准理解你的需求。
            </p>
            <div className="space-y-4">
              {DEMO_FEATURES.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-primary-500" fill="currentColor" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Chat Demo */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
              {/* Chat Header */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">AI红娘</div>
                  <div className="flex items-center text-xs text-green-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    在线
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                {DEMO_MESSAGES.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                        msg.type === 'user'
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 rounded-tr-sm'
                          : 'bg-gray-100 rounded-tl-sm'
                      }`}
                    >
                      <p
                        className={`text-sm ${
                          msg.type === 'user' ? 'text-white' : 'text-gray-700'
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: msg.content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Demo;
