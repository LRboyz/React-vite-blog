import { useState, useEffect } from 'react';
import { Dispatch } from '../redux/module';
// import { Dispatch } from '../redux/module';
import { Store } from '../redux/store';
import { GlobalTheme } from '../typings/global';
import storage from '../utils/storage';

export const useTheme = () => {
  const defaultTheme = storage.get('theme_mode') || 'light';
  const [theme, setTheme] = useState<GlobalTheme | string>(defaultTheme);
  /************************/
  /******* Function *******/
  /************************/
  const initTheme = () => {
    let local_theme = storage.get('theme_mode');
    console.log(local_theme, 'useTheme');
    if (!local_theme) {
      storage.set('theme_mode', theme);
      Dispatch.setState('theme_mode', theme);
      setTheme(theme);
    } else {
      setGlobalTheme(local_theme);
    }
  };
  // 设置主题的方法集合
  const trim = (str: string): string => {
    return (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
  };
  const parseVariables = (variables: string): string[] => {
    const arr = trim(variables).split(';');
    if (arr.length > 0) {
      for (let i = 0, l = arr.length; i < l; i++) {
        const item = trim(arr[i]).split(':');
        if (item && item.length === 2) {
          const name = trim(item[0]).replace('@', '--');
          arr[i] = trim(`${name}:${trim(item[1])}`);
        }
      }
    }

    return arr;
  };
  const setGlobalTheme = (theme: GlobalTheme | string) => {
    const id = 'mi-theme-variables';
    const last = document.getElementById(id);
    if (last) last.remove();
    let variables: any;
    if (theme === 'light') {
      variables = parseVariables(
        ` @mi-theme-color: #2f9688;
          @mi-body-color: #f0f0f0;
          @mi-header-bg-color: #2f9688;
          @mi-header-logo-bg-color: #226a62;
          @mi-header-logo-text-color: #ffffff;
          @mi-header-logo-border-bottom-color: #ffffff;
          @mi-header-trigger-hover-color: rgba(0, 49, 154, 0.08);
          @mi-header-paletter-item-border-color: #e1e1e1;
          @mi-breadcrumb-last-child-color: #999;
          @mi-table-color: #e4e4e4;
          @mi-table-text-color: #333;
          @mi-table-td-color: #ffffff;
          @mi-table-td-hover-color: #ffffff;
          @mi-table-border-color: #f1f1f1;
          @mi-sider-color: #fff;
          @mi-sider-shadow-color: rgba(175, 175, 175, 0.35);
          @mi-sider-border-color: #4c4c4c;
          @mi-anchor-bg-color: #fff;
          @mi-anchor-link-color: #7b7b7b;
          @mi-anchor-icon-color: #7b7b7b;
          @mi-anchor-stick-bg-color: #fff;
          @mi-menu-color: #666;
          @mi-menu-active-color: rgba(47, 150, 136, 0.2);
          @mi-menu-sub-color: #ccc;
          @mi-menu-sub-bg-color: #fff;
          @mi-menu-active-sub-color: rgba(47, 150, 136, 0.6);
          @mi-history-bg-color: #dedede;
          @mi-history-item-bg-color: #fff;
          @mi-history-item-text-color: #666;
          @mi-dropdown-bg-color: #fff;
          @mi-dropdown-text-color: #666;
          @mi-dropdown-item-hover-color: rgba(47, 150, 136, 0.2);
          @mi-modal-bg-color: #fff;
          @mi-modal-text-color: #333;
          @mi-modal-content-color: rgba(51, 51, 51, 0.85);
          @mi-modal-border-inline-color: #f3f3f3;
          @mi-modal-shadow-color: rgba(47, 150, 136, 0.15);
          @mi-modal-btn-primary-color: #ffffff;
          @mi-passport-color: #ffffff;
          @mi-passport-line-color: #3f3f3f;
          @mi-passport-bg-color: #212121;
          @mi-passport-icon-color: #9f9f9f;
          @mi-passport-text-color: #333;
          @mi-passport-strength-color: #999;
          @mi-passport-mask-bg-color: #ffffff;
          @mi-passport-remember-color: #ffffff;
          @mi-passport-submit-color: #ffffff;
          @mi-passport-submit-gradual-start-color: #000000;
          @mi-passport-submit-gradual-end-color: #2f9688;
          @mi-tab-nav-color: #999;
          @mi-tab-nav-border-bottom-color: rgba(162, 162, 162, 0.15);
          @mi-selection-color: #ffffff;
          @mi-selection-bg-color: #dedede;
          @mi-captcha-success-bg-color: rgba(47, 150, 136, 0.2);
          @mi-card-tab-color: #333;
          @mi-popover-bg-color: #ffffff;
          @mi-notice-title-color: #000000;
          @mi-notice-text-color: #666;
          @mi-notice-time-color: #b6b6b6;
          @mi-notice-content-color: rgba(0, 0, 0, 0.6);
          @mi-content-text-color: #333;
          @mi-footer-color: #666;
          @mi-radio-text-color: #333;
          @mi-btn-default-color: #666;
          @mi-btn-defaul-bg-color: #ffffff;
          @mi-btn-defaul-border-color: #e3e3e3;
          @mi-btn-ghost-border-color: #b5b5b5;
          @mi-btn-ghost-text-color: #666;
          @mi-subsidiary-color: #808695;
          @mi-form-label-color: #999;
          @mi-error-color: #ed4014;
          @mi-danger-color: #ff4d4f;
          @mi-success-color: #2f9688;
          @mi-warning-color: #ff9900;
          @mi-info-color: #1890ff;
          @mi-font-color: #fff;
          @mi-link-color: #2f9688;
          @mi-primary-color: #2f9688;
          @mi-captcha-bg-color: #636363;

          @mi-card-color: rgba(255, 255, 255, 0.6);
          @mi-card-hover-color: #ffffff;
          @mi-navbar-hover-color: #e8f3ff;
          `
      );
      const style = document.createElement('style') as any;
      style.id = id;
      style.setAttribute('type', 'text/css');
      if (style.styleSheet) {
        style.styleSheet.cssText = `:root {${variables.join(';')}}`;
      } else {
        const content = document.createTextNode(`:root {${variables.join(';')}}`);
        style.appendChild(content);
      }
      document.head.appendChild(style);
    }
    setTheme(theme);
    storage.set('theme_mode', theme);
    return theme;
  };

  useEffect(() => {
    initTheme();
  }, []);
  return { theme, setGlobalTheme };
};
