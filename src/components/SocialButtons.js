import { InstagramIcon, MailIcon , GithubIcon , LinkedinIcon } from "./icons/icons"

const iconMap = {
    instagram : InstagramIcon,
    github : GithubIcon,
    mail: MailIcon,
    linkedin: LinkedinIcon
};

export const createSocialButton = (type, text, href, isButton = false) => {
  const icon = iconMap[type]();
  const baseClasses = "anim-delay-1300 text-white bg-customBlue border-customBlue hover:bg-blue-600 hover:border-blue-700 ring-customBlue scale-in-center px-2 py-2 rounded inline-block items-center m-1 text-2xl md:text-3xl border focus:ring ring-opacity-50 transition";
  
  if (isButton) {
    return `
      <button class="${baseClasses}">
        ${icon}
        ${text}
      </button>
    `;
  } else {
    return `
      <a class="${baseClasses}" target="_blank" rel="noreferrer" href="${href}">
        ${icon}
        ${text}
      </a>
    `;
  }
};
