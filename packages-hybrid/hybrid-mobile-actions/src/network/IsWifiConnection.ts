// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * @returns {boolean}
 */

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
function IsWifiConnection(): boolean {
    // BEGIN USER CODE
    switch (navigator.connection.type) {
        case Connection.WIFI:
            return true;
        default:
            return false;
    }
    // END USER CODE
}
