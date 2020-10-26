/**
 * @File:      脚手架模板配置文件下载
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V1.0.0
 * @Date:      2020-10-21 20:39:05
 */
const ora = require('ora');
const download = require('download');
const chalk = require('chalk');
const Generator = require('yeoman-generator');
const fs = require('fs');
const path = require('path');
const ORA_SPINNER = {
    interval: 80,
    frames: [
      '   ⠋',
      '   ⠙',
      '   ⠚',
      '   ⠞',
      '   ⠖',
      '   ⠦',
      '   ⠴',
      '   ⠲',
      '   ⠳',
      '   ⠓'
    ]
};
module.exports = class extends Generator {
    constructor(params, opts) {
        super(params, opts);
        this.tplConfigUrl = 'https://raw.githubusercontent.com/sweet-shop/generator-mint/master/generators/app/templateConfig.js';
        // this.templSrc = this.templatePath('/app');
        // console.log(this.templSrc);
    }
    writing() {
        this._downloadTplConfig();
    }
    _downloadTplConfig() {
        let spinner = ora({
            text: `😋Start remote download templateConfig from ${tplConfigUrl} ...`,
            spinner: ORA_SPINNER
        }).start();
        download(
            tplConfigUrl,
            path.join(this.templatePath(), '../../generators/app')
        );
        const info = `🍺${chalk.green('Finish downloading the templateConfig!')}`;
        this.spinner.succeed(info);
        this.spinner.stop();
    }
    end() {}
};
