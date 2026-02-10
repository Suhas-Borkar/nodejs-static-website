pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                    node -v || echo "Node not installed"
                    npm -v || echo "NPM not installed"
                    npm install
                '''
            }
        }

        stage('Run Application') {
            steps {
                sh '''
                    echo "Starting Node app"
                    node index.js &
                    sleep 5
                    echo "Node app executed"
                '''
            }
        }
    }
}
