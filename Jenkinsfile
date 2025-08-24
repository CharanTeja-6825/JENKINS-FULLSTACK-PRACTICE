pipeline {
    agent any

    stages {
        // ===== FRONTEND BUILD =====
        stage('Build Frontend') {
            steps {
                dir('STUDENTAPI-REACT') {
                    sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"

                    nvm use 22.15.1
                    npm install
                    npm run build
                    '''
                }
            }
        }




        // ===== FRONTEND DEPLOY =====
        stage('Deploy Frontend to Tomcat') {
            steps {
                sh '''
                TOMCAT_DIR="/Users/charanteja/Applications/apache-tomcat-10.1.44/webapps/reactstudentapi"

                if [ -d "$TOMCAT_DIR" ]; then
                    rm -rf "$TOMCAT_DIR"
                fi

                mkdir -p "$TOMCAT_DIR"
                cp -R PRODUCT-FRONTEND/dist/* "$TOMCAT_DIR"
                '''
            }
        }

        // ===== BACKEND BUILD =====
        stage('Build Backend') {
            steps {
                dir('STUDENTAPI-SPRINGBOOT') {
                    sh '''
                    export PATH="/opt/homebrew/bin:$PATH"
                    mvn clean package
                    '''
                }
            }
        }


        // ===== BACKEND DEPLOY =====
        stage('Deploy Backend to Tomcat') {
            steps {
                sh '''
                TOMCAT_WEBAPPS="/Users/charanteja/Applications/apache-tomcat-10.1.44/webapps"
                WAR_FILE="$TOMCAT_WEBAPPS/springbootproductapi.war"
                WAR_DIR="$TOMCAT_WEBAPPS/springbootproductapi"

                if [ -f "$WAR_FILE" ]; then
                    rm -f "$WAR_FILE"
                fi

                if [ -d "$WAR_DIR" ]; then
                    rm -rf "$WAR_DIR"
                fi

                cp SpringBootProductDemo/target/*.war "$TOMCAT_WEBAPPS/"
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Pipeline Failed.'
        }
    }
}
