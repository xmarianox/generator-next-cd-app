'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appname', { type: String, required: true });

    this.log(this.options.appname);
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the stylish ${chalk.red('generator-next-cd-app')} generator!`)
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
        default: 'Mariano',
        store: true
      },
      {
        type: 'input',
        name: 'author_email',
        message: 'Ingresa tu email.',
        default: 'mariano@contenidos-digitales.com',
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
  }
};
