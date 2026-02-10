pipeline {
    agent any

    stages {
        stage('Check Node') {
            steps {
                sh 'node -v && npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'npm start'
            }
        }
    }
}
