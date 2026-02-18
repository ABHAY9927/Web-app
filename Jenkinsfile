pipeline {
  agent any

  stages {
    stage('Clone') {
      steps { git 'https://github.com/ABHAY9927/Web-app.git' }
    }

    stage('Build') {
      steps { sh 'docker build -t devops-app .' }
    }

    stage('Deploy') {
      steps {
        sh '''
        docker stop devops || true
        docker rm devops || true
        docker run -d -p 80:3000 --name devops devops-app
        '''
      }
    }
  }
}

