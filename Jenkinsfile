pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                sh 'node index.js'
            }
        }
    }
}
