pipeline {
    agent {
        docker { image 'node:18-alpine' }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
    }
}
