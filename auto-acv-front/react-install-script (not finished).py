#========================================================================
# This python script created by frederic Macabiau can to help you to create and update your react
# for launch this script you need to have npm, python3.10 and pip installed
# to run the script in Linux or MacOS you can run the following command
# python3.10 react-install-script.py
# or in windows you can run the following command
# py -3 react-install-script.py
#========================================================================
#libraries
import os
import platform
try:
    import inquirer
except:
    if(platform.system()=="Windows"):
        os.system("py -3 -m pip install inquirer")
    else:
        os.system("python3.10 -m pip install inquirer")
    import inquirer
print("========================================================================")
print("bienvennue dans le script de creation et d'update de react")
#this dictionary contains all the choises you can make in this script
choises= {
    "ceate react project",
    "update react project"
}
#this dictionary contains all the commands to install the necessary packages
commands= {
    
}
#inquirer is a library that allows you to ask questions to the user
questions = [inquirer.List("choise", message="que voulez vous faire", choices=choises)]
answers = inquirer.prompt(questions)
#this condition allows you to execute the command according to the choice of the user
if(answers["choise"]=="update react project"):
    command="npm update"
else:
    appName = input("enter le nom de votre app ⇒")
    command= "npx create-react-app "+appName
print("execution de la commande ⇒  "+command)
os.system(command)
#this loop allows you to execute all the commands in the commands dictionary
for command in commands:
    print("execution de la commande ⇒  "+command)
    os.system(command)
print("========================================================================")