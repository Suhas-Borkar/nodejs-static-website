pipeline {
    agent {
        docker {
            image 'node:18-bullseye'
        }
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

        stage('Run Application') {
            steps {
                sh '''
                    echo "Starting Node application..."
                    node index.js &
                    sleep 5
                    echo "App started successfully"
                '''
            }
        }
    }
}
