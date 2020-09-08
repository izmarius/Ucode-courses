// The Singleton pattern allows you to limit the number of instances of a particular object to one. This single instance is called the singleton.

// Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.

// used to limit the instances of an object

function Process (state) {
    this.state = state;
}

 const Singleton = (() => {
    function PrcoessManager () {
        this.numProcess  = 0;
    };

    let pManager;

    function createProcessManager() {
        pManager = new PrcoessManager();
        return pManager;
    };

    return {
        getProcessManager: () => {
            if (!pManager)
               pManager = createProcessManager();
           return pManager;
        }
    };
 })()

 const processManager = Singleton.getProcessManager();

 console.log(processManager);