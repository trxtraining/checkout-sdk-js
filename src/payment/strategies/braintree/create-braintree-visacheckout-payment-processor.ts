import { createRequestSender } from '@bigcommerce/request-sender';
import { ScriptLoader } from '@bigcommerce/script-loader';

import BraintreeScriptLoader from './braintree-script-loader';
import BraintreeSDKCreator from './braintree-sdk-creator';
import BraintreeVisaCheckoutPaymentProcessor from './braintree-visacheckout-payment-processor';

export default function createBraintreeVisaCheckoutPaymentProcessor(scriptLoader: ScriptLoader) {
    const braintreeScriptLoader = new BraintreeScriptLoader(scriptLoader);
    const braintreeSDKCreator = new BraintreeSDKCreator(braintreeScriptLoader);
    const requestSender = createRequestSender();

    return new BraintreeVisaCheckoutPaymentProcessor(braintreeSDKCreator, requestSender);
}
