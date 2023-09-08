export interface responseCaptureDonation {
  checkoutPaymentIntent: string;
  createTime: string;
  expirationTime: string;
  id: string;
  links: [
    {
      href: string;
      method: string;
      rel: string;
      title: string;
      mediaType: string;
      encType: string;
    }
  ];
  payer: {
    addressPortable: {
      addressDetails: {
        buildingName: string;
        deliveryService: string;
        streetName: string;
        streetNumber: string;
        streetType: string;
        subBuilding: string;
      };
      addressLine1: string;
      addressLine2: string;
      addressLine3: string;
      adminArea1: string;
      adminArea2: string;
      adminArea3: string;
      adminArea4: string;
      countryCode: string;
      postalCode: string;
    };
    birthDate: string;
    email: string;
    name: {
      alternateFullName: string;
      fullName: string;
      givenName: string;
      middleName: string;
      prefix: string;
      suffix: string;
      surname: string;
    };
    payerId: string;
    phoneWithType: {
      phoneNumber: {
        countryCallingCode: string;
        extensionNumber: string;
        nationalNumber: string;
      };
      phoneType: string;
    };
    taxInfo: {
      taxId: string;
      taxIdType: string;
    };
  };
  purchaseUnits: [
    {
      amountWithBreakdown: {
        amountBreakdown: {
          discount: {
            currencyCode: string;
            value: string;
          };
          handling: {
            currencyCode: string;
            value: string;
          };
          insurance: {
            currencyCode: string;
            value: string;
          };
          itemTotal: {
            currencyCode: string;
            value: string;
          };
          shipping: {
            currencyCode: string;
            value: string;
          };
          shippingDiscount: {
            currencyCode: string;
            value: string;
          };
          taxTotal: {
            currencyCode: string;
            value: string;
          };
        };
        currencyCode: string;
        value: string;
      };
      customId: string;
      description: string;
      id: string;
      invoiceId: string;
      items: [
        {
          category: string;
          name: string;
          description: string;
          quantity: string;
          sku: string;
          tax: {
            currencyCode: string;
            value: string;
          };
          unitAmount: {
            currencyCode: string;
            value: string;
          };
        }
      ];
      payee: {
        clientId: string;
        email: string;
        merchantId: string;
        payeeDisplayable: {
          brandName: string;
          businessPhone: {
            countryCallingCode: string;
            extensionNumber: string;
            nationalNumber: string;
          };
          email: string;
        };
      };
      paymentInstruction: {
        platformFees: [string];
        payeePricingTierId: string;
        disbursementMode: string;
      };
      payments: {
        authorizations: [
          {
            amount: {
              currencyCode: string;
              value: string;
            };
            authorizationStatusDetails: {
              reason: string;
            };
            createTime: string;
            expirationTime: string;
            id: string;
            invoiceId: string;
            links: [
              {
                href: string;
                method: string;
                rel: string;
                title: string;
                mediaType: string;
                encType: string;
              }
            ];
            sellerProtection: {
              disputeCategories: [string];
              status: string;
            };
            status: string;
            updateTime: string;
          }
        ];
        captures: [
          {
            amount: {
              currencyCode: string;
              value: string;
            };
            captureStatusDetails: {
              reason: string;
            };
            createTime: string;
            disbursementMode: string;
            finalCapture: boolean;
            id: string;
            invoiceId: string;
            links: [
              {
                href: string;
                method: string;
                rel: string;
                title: string;
                mediaType: string;
                encType: string;
              }
            ];
            sellerProtection: {
              disputeCategories: [string];
              status: string;
            };
            sellerReceivableBreakdown: {
              grossAmount: {
                currencyCode: string;
                value: string;
              };
              netAmount: {
                currencyCode: string;
                value: string;
              };
              paypalFee: {
                currencyCode: string;
                value: string;
              };
              receivableAmount: {
                currencyCode: string;
                value: string;
              };
            };
            status: string;
            updateTime: string;
          }
        ];
        refunds: [
          {
            amount: {
              currencyCode: string;
              value: string;
            };
            createTime: string;
            id: string;
            invoiceId: string;
            links: [
              {
                href: string;
                method: string;
                rel: string;
                title: string;
                mediaType: string;
                encType: string;
              }
            ];
            noteToPayer: string;
            refundStatusDetails: {
              reason: string;
            };
            sellerPayableBreakdown: {
              grossAmount: {
                currencyCode: string;
                value: string;
              };
              netAmount: {
                currencyCode: string;
                value: string;
              };
              netAmountBreakdown: [
                {
                  convertedAmount: {
                    currencyCode: string;
                    value: string;
                  };
                  payableAmount: {
                    currencyCode: string;
                    value: string;
                  };
                }
              ];
              paypalFee: {
                currencyCode: string;
                value: string;
              };
              totalRefundedAmount: {
                currencyCode: string;
                value: string;
              };
            };
            status: string;
            updateTime: string;
          }
        ];
      };
      referenceId: string;
      shippingDetail: {
        name: {
          fullName: string;
        };
        type: string;
        addressPortable: {
          addressDetails: {
            buildingName: string;
            deliveryService: string;
            streetName: string;
            streetNumber: string;
            streetType: string;
            subBuilding: string;
          };
          addressLine1: string;
          addressLine2: string;
          addressLine3: string;
          adminArea1: string;
          adminArea2: string;
          adminArea3: string;
          adminArea4: string;
          countryCode: string;
          postalCode: string;
        };
      };
      softDescriptor: string;
    }
  ];
  status: string;
  updateTime: string;
}

export interface responsePaymentDonation {
  href: string,
  method: string,
  rel: string,
  title: string,
  mediaType: string,
  encType: string
}

export interface requestDonation {
  reason: string;
  amount: number;
  programId: string;
}

export interface requestEnroll {
  programId:string
}

export interface responseEnroll {
  programId: string,
  name: string,
  description: string,
  donationInfo: string,
  donationReason: string[],
  target: number,
  endDate: string,
  page: {
    pageId: string,
    pageType: string,
    content: string,
    programId: string,
    partnerId: string,
    modifiedAt: string,
    modifiedById: string,
    modifiedByName: string,
    createdAt: string,
    createdById: string,
    createdByName: string
  },
  totalDonation: number,
  isClosed: boolean,
  closedReason: string,
  programThumbnail: {
    attachmentId: string,
    path: string,
    size: number,
    name: string,
    contentType: string,
    modifiedAt: string,
    modifiedById: string,
    modifiedByName: string,
    createdAt: string,
    createdById: string,
    createdByName: string
  },
  enrollments: [
    {
      enrollmentId: string,
      programId: string,
      donations: [
        {
          donationId: string,
          reason: string,
          status: string,
          remark: string,
          amount: number,
          method: string,
          paypalOrderId: string
        }
      ],
      createdAt: string,
      createdById: string,
      createdByName: string
    }
  ],
  currentUserEnrollment: {
    enrollmentId: string,
    programId: string,
    donations: [
      {
        donationId: string,
        reason: string,
        status: string,
        remark: string,
        amount: number,
        method: string,
        paypalOrderId: string
      }
    ],
    createdAt: string,
    createdById: string,
    createdByName: string
  },
  modifiedAt: string,
  modifiedById: string,
  modifiedByName: string,
  createdAt: string,
  createdById: string,
  createdByName: string
}