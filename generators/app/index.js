'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log(`${chalk.magenta('Iniciando...')}`);
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Bienvenidos al generador de proyectos 
        de ${chalk.green.bold('CD')} 
        ${chalk.green.underline.italic('generator-next-cd-app')}`
      )
    );

    // Old app.
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre de tu projecto?',
        default: this.appname,
        store: true
      },
      {
        type: 'input',
        name: 'version',
        message: 'Versión del proyecto?',
        default: '1.0.0',
        store: true
      },
      {
        type: 'input',
        name: 'description',
        message: 'Descripción del proyecto?',
        default: '',
        store: true
      },
      {
        type: 'input',
        name: 'author_name',
        message: 'Ingresa tu nombre.',
        default: '',
        store: true
      },
      {
        type: 'input',
        name: 'author_email',
        message: 'Ingresa tu email.',
        default: '',
        store: true
      },
      {
        type: 'input',
        name: 'author_url',
        message: 'Ingresa tu sitio web "opcional".',
        default: '',
        store: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let dir = this.props.name;

    this.destinationRoot(mkdirp.sync(dir));

    // Copy package.json
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name,
        version: this.props.version,
        description: this.props.description,
        authorName: this.props.author_name,
        authorEmail: this.props.author_email,
        authorUrl: this.props.author_url
      }
    );
    // Copy base .gitignore
    this.fs.copyTpl(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    // Copy base .babelrc
    this.fs.copyTpl(this.templatePath('_babelrc'), this.destinationPath('.babelrc'));
    // Copy base .eslintrc
    this.fs.copyTpl(this.templatePath('_eslintrc'), this.destinationPath('.eslintrc'));
    // Copy app files
    this.fs.copy(this.templatePath('app'), this.destinationPath('./'));
  }

  install() {
    this.installDependencies();
  }

  installDependencies() {
    // Intall dependecies.
    this.npmInstall(
      [
        'body-parser',
        'express',
        'isomorphic-fetch',
        'next',
        'prop-types',
        'react',
        'react-dom',
        'styled-components'
      ],
      {
        'save-dev': false
      }
    );
    // Install Dev dependecies.
    this.npmInstall(
      [
        'eslint',
        'eslint-config-airbnb',
        'eslint-plugin-import',
        'eslint-plugin-jsx-a11y',
        'eslint-plugin-react',
        'babel-plugin-module-resolver',
        'babel-plugin-styled-components'
      ],
      {
        'save-dev': true
      }
    );
    // Message after install
    this.log(
      yosay(
        `Para correr tu proyecto puedes correr
        el siguiente comando: ${chalk.magenta('npm run dev')}`
      )
    );
  }
};
