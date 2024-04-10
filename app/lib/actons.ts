'use server'

export async function createInvoice(formData: FormData) {
    const rawFromData = {
        customerID: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    };
    console.log(rawFromData)
}