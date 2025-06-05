import { createSocialButton } from './SocialButtons.js';

export const Hero = () => {
  return `
    <div class="bg-magnolia h-screen w-full flex flex-col items-center justify-center">
      <span class="text-6xl p-5 flex flex-col items-center">
        <span>AKSHAY</span>
        <span>SHARMA</span>
      </span>
      
      <div class="grid grid-flow-col grid-rows-2 gap-4">
        ${createSocialButton('instagram', 'Instagram', 'https://instagram.com/_akshay.e_')}
        ${createSocialButton('mail', 'Mail', '', true)}
        ${createSocialButton('github', 'Github', 'https://github.com/akshay4git')}
        ${createSocialButton('linkedin', 'LinkedIn', 'https://www.linkedin.com/in/akshay-sharma-a64957253/')}
      </div>
    </div>
  `;
};
