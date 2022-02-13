﻿window.ShowToastr = (type, message) => {
    console.log("window.ShowToastr")
    if (type === "success") {
        toastr.success(message, 'Operation Successful!', { timeOut: 5000 })
    }
    if (type === "error") {
        toastr.error(message, 'Operation Failed!', { timeOut: 5000 })
    }
}

window.ShowSwal = (type, message) => {
    console.log("window.ShowToastr")
    if (type === "success") {
        Swal.fire(
            'Success Notification',
            message,
            'success'
        )
    }
    if (type === "error") {
        Swal.fire(
            'Error Notification',
            message,
            'error'
        )
    }
}