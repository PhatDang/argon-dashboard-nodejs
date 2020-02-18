// eslint-disable-next-line import/prefer-default-export
export const apps = [
  {
    name: 'argon-free-backend',
    script: './bin/www',
    node_args: ['--inspect=0.0.0.0:9229'],
    watch: true,
    ignore_watch: ['public/**/*', 'views/**/*.ejs'],
  },
];
