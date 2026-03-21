import { type Feature, type Step, type Stat, type NavLink } from '../types';
import { MessageCircle, Sparkles, Zap, Shield, Users, Heart, QrCode } from 'lucide-react';
import React from 'react';

// 导航链接
export const NAV_LINKS: NavLink[] = [
  { label: '功能特色', href: '#features' },
  { label: '使用流程', href: '#how-it-works' },
  { label: '关于我们', href: '#about' },
];

// 统计数据
export const STATS: Stat[] = [
  { value: '10万+', label: '优质单身用户' },
  { value: '98%', label: '匹配满意度' },
  { value: '3', label: '免费推荐额度' },
];

// 功能特性列表
export const FEATURES: Feature[] = [
  {
    icon: React.createElement(MessageCircle, { className: 'w-6 h-6 text-primary-500' }),
    title: '对话式匹配',
    desc: '像和朋友聊天一样自然表达，AI理解你的真实需求，告别繁琐的表格填写',
  },
  {
    icon: React.createElement(Sparkles, { className: 'w-6 h-6 text-secondary-500' }),
    title: '智能语义理解',
    desc: '基于大模型Embedding技术，深度解析你的描述，精准匹配符合条件的对象',
  },
  {
    icon: React.createElement(Zap, { className: 'w-6 h-6 text-amber-500' }),
    title: '即时推荐',
    desc: '确认需求后秒级响应，AI红娘立即为你筛选并推送3位优质嘉宾卡片',
  },
  {
    icon: React.createElement(Shield, { className: 'w-6 h-6 text-emerald-500' }),
    title: '隐私保护',
    desc: '严格的数据加密与脱敏处理，只在双方同意后才开放联系方式',
  },
  {
    icon: React.createElement(Users, { className: 'w-6 h-6 text-blue-500' }),
    title: '真人认证',
    desc: '所有推荐用户均经过实名认证，确保信息真实可靠',
  },
  {
    icon: React.createElement(Heart, { className: 'w-6 h-6 text-rose-500' }),
    title: '专属服务',
    desc: '每位用户拥有专属AI红娘，7×24小时在线，随时为你解答疑问',
  },
];

// 使用步骤
export const STEPS: Step[] = [
  {
    step: '01',
    title: '添加专属红娘',
    desc: '扫描企业微信二维码，添加你的专属AI红娘为好友',
    icon: React.createElement(QrCode, { className: 'w-8 h-8 text-primary-500' }),
  },
  {
    step: '02',
    title: '描述理想对象',
    desc: '像聊天一样告诉AI红娘你的择偶要求，她会理解你的每一句话',
    icon: React.createElement(MessageCircle, { className: 'w-8 h-8 text-secondary-500' }),
  },
  {
    step: '03',
    title: '查看推荐结果',
    desc: 'AI红娘为你推送3位精准匹配的对象卡片，点击查看详情并打招呼',
    icon: React.createElement(Heart, { className: 'w-8 h-8 text-rose-500' }),
  },
];

// 对话演示消息
export const DEMO_MESSAGES = [
  {
    type: 'ai' as const,
    content: '你好呀！我是你的AI红娘 👋 请告诉我你想找什么样的TA？',
  },
  {
    type: 'user' as const,
    content: '我想找25-30岁、身高175以上、在上海工作的硕士学历男生，性格阳光开朗',
  },
  {
    type: 'ai' as const,
    content: '收到！我理解你想找：**上海、25-30岁、175cm+、硕士、阳光开朗**的男生，对吗？',
  },
  {
    type: 'user' as const,
    content: '对的！',
  },
  {
    type: 'ai' as const,
    content: '正在为你推荐，稍等哦~ ✨',
  },
];

// 演示区域特点列表
export const DEMO_FEATURES = [
  '支持多轮对话，逐步完善你的要求',
  '智能识别年龄、身高、学历、城市等关键信息',
  '自动过滤不符合条件的推荐，节省你的时间',
];

// 页脚链接
export const FOOTER_LINKS = {
  product: [
    { label: '功能介绍', href: '#' },
    { label: '使用指南', href: '#' },
    { label: '常见问题', href: '#' },
  ],
  about: [
    { label: '关于我们', href: '#' },
    { label: '联系我们', href: '#' },
    { label: '隐私政策', href: '#' },
    { label: '用户协议', href: '#' },
  ],
};

// ICP 备案号（请替换为实际备案号）
export const ICP_NUMBER = '备案号';
