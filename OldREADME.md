# GITHUB ACTIONS

### ¿Què son las GitHub Actions?

Les GitHub Actions serveixen per automatizar el fluxe de treball de un projecte
en totes les seues parts, desde les parts inicials com son les idees sobre el 
projecte, fins les parts finals com puga ser el seu desplegament a producció.

Las Github Actions son una plataforma de integración y despliegue continuos 
(CI/CD).

Les GitHub Actions son una plataforma d´integració i desplegament continuo. (CI/CD).

### ¿Per que està composta una GitHub Action?

En una GitHub Action podem encontrar: 

    - Workflows.
    - Jobs.
    - Steps.
    - Actions.
    - Runners.

    · Workflow -> Es el procediment d´automatització què s´agrega a un repositori.
                Pot estar compost d´un o més jobs.
                Els seus llanzadors poden ser "push", "PR", etc.

    · Jobs -> Es el conjunt de "steps" què s´executaran, estos por defecte s´executen
            tots en paralel, pero hi ha la possibilitat de què hi haja jobs que esperen
            a altres jobs para poder executar-se.

    · Steps -> Es la tasca individual què s´executarà dintre d´un job.

               Tipus: 

                + Actions.
                + Scripts (personalitzats).
               
    · Actions -> Son las execucions independents que juntes formen un "Step".

    · Runners -> Es el servidor que te instal·lada l´aplicació d´execució.

---

## Pràctica GitHub Actions.

### Crear un Workflow amb els següents jobs.

#### Primeres instruccions per al nostre Workflow.

- Push: Estem diguent-li al nostre workflow que s´haura d´executar quan l´usuari faça un push.
- Branches: Este push que llançarà aquest workflow serà a la branca "main".
- Premissions | Contents | write: Estes instruccions li donen permissos d´escritura al nostre 
arxiu .yml. 

![Primeres instruccions](./img/inici%20workflow.png)

#### Linter Job.

En la següent imagtge podem veure el job Linter_job i per el que està compost:

- Runs-on: Runner on volem que correga, en este cas "ubuntu-latest".
- Steps:
* Name: Nom de l´step.
* Uses: Acció que va a utilitzar el nostre step.
* Continue-on-error: Açò farà que el nostre fluxe de treball no s´ature a pessar de que hi haja algún error.

Desglosament del job:

1. Primer correm el runner.
2. El primer step s´encarregara de "checkejar" el còdig.
3. Una vegada "checkejat" el còdig instal·lar-hem les dependències necessaries.
4. Executar-hem el linter per vore que tot el còdig complix amb els requisits.

#### Cypress Job.
#### Badged Job.
#### Deploy Job.
#### Notification Job.




    
