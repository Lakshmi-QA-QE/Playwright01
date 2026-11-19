pipeline {
    agent any
    environment {
        PLAYWRIGHT_BROWSERS_PATH = '0'
    }
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Install packages') {
            steps { bat 'npm ci' }
        }
        stage('Install browser') {
            steps { bat 'npx playwright install chromium' }
        }
        stage('Run tests') {
            steps { bat 'npx playwright test --project=chromium' }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}