module.exports = {
  projectName: 'enjoy_time',
  privateKey: 'C:\\Users\\Administrator/.ssh/id_rsa',
  passphrase: '',
  readyTimeout: 20000,
  cluster: [],
  dev: {
    name: '开发环境',
    script: 'npm run build:dev',
    host: '120.25.73.210',
    port: 22,
    username: 'root',
    password: 'Q@waszx99',
    distPath: 'build',
    webDir: '/usr/local/nginx/html', // 服务器部署路径（不可为空或'/'）
    bakDir: '/usr/local/nginx/backup', // 备份路径 (打包前备份之前部署目录 最终备份路径为 /usr/local/nginx/backup/html.zip)
    isRemoveRemoteFile: true,
    isRemoveLocalFile: true,
  },
};
