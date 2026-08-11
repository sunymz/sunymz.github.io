module.exports = {
  apps: [{
    name: 'react-portfolio',
    script: 'serve',
    args: '-s dist -l 48484',
    instances: 1,
    autorestart: true,
    watch: false,
    time: true,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }],
  
  deploy: {
    production: {
      user: 'ssh_username',
      host: ['ssh_host'],
      ref: 'origin/main',
      repo: 'git@github.com:username/repository.git',
      path: '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': '',
      'post-setup': 'pm2 startOrReload ecosystem.config.cjs --env production'
    }
  }
};