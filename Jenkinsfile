pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                    node -v
                    npm -v
                    npm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || echo "No build step defined"'
            }
        }
    }
}
