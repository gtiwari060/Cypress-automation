pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "choose in which browser you want to execute your script")
    }

    options{
        ansiColor('xterm') 
}
    
    stages{
        stage('Build'){
            steps{
            echo "Building the App"
            }
        }

        stage('test'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploy'){
            steps{
            echo "Deploy the Application"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: true, reportDir: 'C:/ProgramData/Jenkins/.jenkins/workspace/CypressPipeline/cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}