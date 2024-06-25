import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // custom
  language: [
    // 'intro',
    // 'hello',
    'language/test1',
    /* {
      type: 'category',
      label: '语言',
      items: ['language/test1'],
    }, 
    {
      type: 'category',
      label: '语言',
      items: ['language/test1'],
    },
    */

  ],
  webApp: [
    'web/hello',
    /* {
      type: 'category',
      label: 'Web应用',
      items: ['web/hello'],
    }, */
  ],
  operations: [
    'ops/nginx',
    'ops/script',
    'ops/docker',
    /*  {
       type: 'category',
       label: '运维',
       items: ['ops/nginx'],
     }, */
  ],

  // language: [
  //   'hello',
  //   {
  //     type: 'category',
  //     label: '编程语言',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
