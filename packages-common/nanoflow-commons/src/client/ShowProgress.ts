// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * Shows a loading dialog.
 *
 * Returns an identifier that can be used to close the dialog.
 * @param {string} message - The text to show while loading.
 * @param {boolean} blocking - Block the user interface immediately.
 * @returns {Big}
 */
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
function ShowProgress(message?: string, blocking?: boolean): BigJs.Big {
    // BEGIN USER CODE

    const id = mx.ui.showProgress(message, blocking);
    return new Big(id);

    // END USER CODE
}
