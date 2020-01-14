declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({ 
        indexes: ["erstelle Aufgabe *"], //der Stern * ist die Wildcard//
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("hey there...");
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE", //Sprache//
                    continuous: true,
                    listen: true, 
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});