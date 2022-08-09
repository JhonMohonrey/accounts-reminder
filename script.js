const model = () => {
    let instagramArray = [
        {
            email: '',
            password: '',
        },
        {
            email: 'instagram 1',
            password: 'passwordInstagram 1',
        },
        {
            email: 'instagram 2',
            password: 'passwordInstagram 2',
        },
    ];

    let youtubeArray = [
        {
            email: '',
            password: '',
        },
        {
            email: 'youtube 1',
            password: 'passwordYoutube 1',
        },
        {
            email: 'youtube 2',
            password: 'passwordYoutube 2',
        },
        {
            email: 'youtube 3',
            password: 'passwordYoutube 3',
        },
    ];

    let facebookArray = [
        {
            email: '',
            password: '',
        },
        {
            email: 'facebook 1',
            password: 'facebook pass 1',
        },
        {
            email: 'facebook 2',
            password: 'passwordFacebook 2',
        },
    ];

    let coinArray = [
        {
            email: '',
            password: '',
        },
        {
            email: 'coin 1',
            password: 'coinPass 1',
        },
        {
            email: 'coin 2',
            password: 'coinPass 2',
        },
    ]
    return {instagramArray, youtubeArray, facebookArray, coinArray}
}
model();

const view = () => {
    let divData = document.querySelectorAll('.div');
    let IdArray = ['instagram', 'youtube', 'facebook', 'coinPh'];
    let IdArrayPass = ['instagramPass', 'youtubePass', 'facebookPass', 'coinPhPass'];
    let copyData = ['instagramCopy', 'youtubeCopy', 'facebookCopy', 'coinPh'];
    let copyDataPass = ['instagramPassCopy', 'youtubePassCopy', 'facebookPassCopy', 'coinPhCopy'];

    divData.forEach(div => {
        let prevBtn = document.querySelector('.prev');
        let nextBtn = document.querySelector('.next');
        let idSetter = 0;
        let passId = 0;
        let copyCount = 0;
        let copyCountPass = 0;

        const createElement = document.createElement('div');
        createElement.classList.add('count');
        div.appendChild(createElement)

        const accountCount = document.createElement('span');
        accountCount.id = 'account_count';
        accountCount.textContent = '0'
        createElement.appendChild(accountCount);

        //===================================================(Email)=====>
        const container = document.createElement('div');
        container.classList.add('container');
        div.appendChild(container)

        const label = document.createElement('label');
        label.textContent = 'Email';
        container.appendChild(label);

        const input = document.createElement('input');
        input.type = 'text';
        input.id = IdArray[idSetter]
        function idSelectionForInputEmail() {
            prevBtn.addEventListener('click', () => {
                if (idSetter > 0) {
                    idSetter--;
                    input.id = IdArray[idSetter];
                }
            })
            nextBtn.addEventListener('click', () => {
                if (idSetter < IdArray.length - 1) {
                    idSetter++;
                    input.id = IdArray[idSetter];
                }
            })
        }
        idSelectionForInputEmail();
        container.appendChild(input);

        const buttonCopyOne = document.createElement('button');
        buttonCopyOne.textContent = 'copy';
        buttonCopyOne.id = copyData[copyCount];
        function copyDataEmail() {
            prevBtn.addEventListener('click', () => {
                if (copyCount > 0) {
                    copyCount--;
                    buttonCopyOne.id = copyData[copyCount];
                }
            })
            nextBtn.addEventListener('click', () => {
                if (copyCount < copyData.length - 1) {
                    copyCount++;
                    buttonCopyOne.id = copyData[copyCount];
                }
            })
        }
        copyDataEmail();
        container.appendChild(buttonCopyOne);
        //===================================================(Email)=====>

        //===================================================(Password)=====>
        const labelPass = document.createElement('label');
        labelPass.textContent = 'Password';
        container.appendChild(labelPass);

        const inputPass = document.createElement('input');
        inputPass.type = 'text';
        inputPass.id = IdArrayPass[idSetter]
        function idSelectionForPassword() {
            prevBtn.addEventListener('click', () => {
                if (passId > 0) {
                    passId--;
                    inputPass.id = IdArrayPass[passId];
                }
            })
            nextBtn.addEventListener('click', () => {
                if (passId < IdArray.length - 1) {
                    passId++;
                    inputPass.id = IdArrayPass[passId];
                }
            })
        }
        idSelectionForPassword();
        container.appendChild(inputPass);

        const copyPass = document.createElement('button');
        copyPass.textContent = 'copy';
        copyPass.id = copyDataPass[copyCountPass];
        function idCopyPassData() {
            prevBtn.addEventListener('click', () => {
                if (copyCountPass > 0) {
                    copyCountPass--;
                    copyPass.id = copyDataPass[copyCountPass];
                }
            })
            nextBtn.addEventListener('click', () => {
                if (copyCountPass < copyDataPass.length -1) {
                    copyCountPass++;
                    copyPass.id = copyDataPass[copyCountPass];
                }
            })
        }
        idCopyPassData();
        container.appendChild(copyPass);
        //===================================================(Password)=====>

        //===================================================(prev and next button)=====>
        const divButtons = document.createElement('div');
        divButtons.classList.add('buttons');
        div.appendChild(divButtons);

        const buttonPrev = document.createElement('button');
        buttonPrev.textContent = 'prev';
        buttonPrev.id = 'prevAccount';
        divButtons.appendChild(buttonPrev);

        const buttonNext = document.createElement('button');
        buttonNext.textContent = 'next';
        buttonNext.id = 'nextAccount';
        divButtons.appendChild(buttonNext);
        //===================================================(prev and next button)=====>
    })
}
view();

const control = () => {
    let IGCounter = 0;
    let YTCounter = 0;
    let FBCounter = 0;
    let CoinCounter = 0;
    const prevBtnData = document.querySelector('.prev');
    prevBtnData.addEventListener('click', prevBtn);

    const nextBtnData = document.querySelector('.next');
    nextBtnData.addEventListener('click', nextBtn)

    let div = document.querySelectorAll('.div');
    let next = 0;

    let reset = document.querySelectorAll('input');

    function prevBtn() {
        if (next > 0) {
            next--;
            let prev = next + 1;
            div[prev].classList.add('hide');
            div[next].classList.remove('hide');
            IGCounter = 0;
            YTCounter = 0;
            FBCounter = 0;
            CoinCounter = 0;
            for (i=0;i<reset.length -1;i++) {
                reset[i].value = '';
            }
        }
    }

    function nextBtn() {
        if (next < div.length -1) {
            next++;
            prev = next -1;
            div[prev].classList.add('hide');
            div[next].classList.remove('hide');
            IGCounter = 0;
            YTCounter = 0;
            FBCounter = 0;
            CoinCounter = 0;
            for (i=0;i<reset.length;i++) {
                reset[i].value = '';
            }
        }
    }

    //==================================(control for email and password)====================>
    let nextAccountData = document.querySelectorAll('button');
    nextAccountData.forEach(btn => {
        btn.addEventListener('click', e => {
            let getIds = e.target.id;

            if (getIds === 'nextAccount') {
                let idChecker = document.querySelectorAll('input');

                if (IGCounter < model().instagramArray.length -1 ) {
                    IGCounter++;
                }
                if (YTCounter < model().youtubeArray.length -1) {
                    YTCounter++;
                }
                if (FBCounter < model().facebookArray.length -1) {
                    FBCounter++;
                }
                if (CoinCounter < model().coinArray.length -1) {
                    CoinCounter++;
                }

                //================(email)============>
                idChecker.forEach(idGet => {
                    if (idGet.id === 'instagram') {
                        if (IGCounter < model().instagramArray.length) {
                            let accounts = model().instagramArray[IGCounter].email;
                            idGet.value = accounts;
                        }

                    } else if (idGet.id === 'youtube') {
                        if (YTCounter < model().youtubeArray.length) {
                            let accounts = model().youtubeArray[YTCounter].email;
                            idGet.value = accounts;
                        }

                    } else if (idGet.id === 'facebook') {
                        if (FBCounter < model().facebookArray.length) {
                            let accounts = model().facebookArray[FBCounter].email;
                            idGet.value = accounts;
                        }
                    } else if (idGet.id === 'coinPh') {
                        if (CoinCounter < model().coinArray.length) {
                            let accounts = model().coinArray[CoinCounter].email;
                            idGet.value = accounts;
                        }
                    }
                });

                //=============(password)================>
                let passId = document.querySelectorAll('input');

                passId.forEach(passD => {
                    if (passD.id === 'instagramPass') {
                        let pass = model().instagramArray[IGCounter].password;
                        passD.value = pass;
                    } else if (passD.id === 'youtubePass') {
                        let pass = model().youtubeArray[YTCounter].password;
                        passD.value = pass;

                    } else if (passD.id === 'facebookPass') {
                        let pass = model().facebookArray[FBCounter].password;
                        passD.value = pass;
                    } else if (passD.id === 'coinPhPass') {
                        let pass = model().coinArray[CoinCounter].password;
                        passD.value = pass;
                    }
                })

            } else if (getIds === 'prevAccount') {
                let idChecker = document.querySelectorAll('input');
                if (IGCounter > 0) {
                    IGCounter--;
                }
                if (YTCounter > 0) {
                    YTCounter--;
                }
                if (FBCounter > 0) {
                    FBCounter--;
                }
                if (CoinCounter > 0) {
                    CoinCounter--;
                }

                idChecker.forEach(idGet => {
                    if (idGet.id === 'instagram') {
                        if (IGCounter >= 0) {
                            let accounts = model().instagramArray[IGCounter].email;
                            idGet.value = accounts;
                        }
                    } else if (idGet.id === 'youtube') {
                        if (YTCounter >= 0) {
                            let accounts = model().youtubeArray[YTCounter].email;
                            idGet.value = accounts;
                        }

                    } else if (idGet.id === 'facebook') {
                        if (FBCounter >= 0) {
                            let accounts = model().facebookArray[FBCounter].email;
                            idGet.value = accounts;
                        }
                    } else if (idGet.id === 'coinPh') {
                        if (CoinCounter >= 0) {
                            let accounts = model().coinArray[CoinCounter].email;
                            idGet.value = accounts;
                        }
                    }
                });

                //=============(password)================>
                let passId = document.querySelectorAll('input');

                passId.forEach(passD => {
                    if (passD.id === 'instagramPass') {
                        let pass = model().instagramArray[IGCounter].password;
                        passD.value = pass;
                    } else if (passD.id === 'youtubePass') {
                        let pass = model().youtubeArray[YTCounter].password;
                        passD.value = pass;

                    } else if (passD.id === 'facebookPass') {
                        let pass = model().facebookArray[FBCounter].password;
                        passD.value = pass;
                    } else if (passD.id === 'coinPhPass') {
                        let pass = model().coinArray[CoinCounter].password;
                        passD.value = pass;
                    }
                });
            }
        });

        //=====================(copy control)=======================>
        let copyButtons = document.querySelectorAll('button');

        copyButtons.forEach(copyBtn => {
            copyBtn.addEventListener('click', (e) => {
                let id = e.target.id;

                //email copy
                if (id === 'instagramCopy') {
                    let idEmail = document.querySelectorAll('input');
                    let emailId = [0, 2, 4, 6];

                    for (i=0;i<4;i++) {
                        let emailVal = idEmail[emailId[i]];
                        emailVal.select();
                        emailVal.setSelectionRange(0, 99999);
                        navigator.clipboard.writeText(emailVal.value);
                    }

                } else if (id === 'youtubeCopy') {
                    let idEmail = document.querySelectorAll('input');
                    let emailId = [0, 2, 4, 6];

                    for (i=0;i<4;i++) {
                        let emailVal = idEmail[emailId[i]];
                        emailVal.select();
                        emailVal.setSelectionRange(0, 99999);
                        navigator.clipboard.writeText(emailVal.value);
                    }

                } else if (id === 'facebookCopy') {
                    let idEmail = document.querySelectorAll('input');
                    let emailId = [0, 2, 4, 6];

                    for (i=0;i<4;i++) {
                        let emailVal = idEmail[emailId[i]];
                        emailVal.select();
                        emailVal.setSelectionRange(0, 99999);
                        navigator.clipboard.writeText(emailVal.value);
                    }

                } else if (id === 'coinPh') {
                    let idEmail = document.querySelectorAll('input');
                    let emailId = [0, 2, 4, 6];

                    for (i=0;i<4;i++) {
                        let emailVal = idEmail[emailId[i]];
                        emailVal.select();
                        emailVal.setSelectionRange(0, 99999);
                        navigator.clipboard.writeText(emailVal.value);
                    }

                }

                //password copy
                if (id === 'instagramPassCopy') {
                    let idPass = document.querySelectorAll('input');
                    let passIdCount = [1, 3, 5, 7];

                    for (i=0;i<4;i++) {
                        let passVal = idPass[passIdCount[i]];
                        passVal.select();
                        passVal.setSelectionRange(0, 99999);
                        navigator.clipboard.writeText(passVal.value);
                    }
                } else if (id === 'youtubePassCopy') {
                    let idPass = document.querySelectorAll('input');
                    let passIdCount = [1, 3, 5, 7];

                    for (i=0;i<4;i++) {
                        let passVal = idPass[passIdCount[i]];
                        passVal.select();
                        passVal.setSelectionRange(0, 99999);
                        navigator.clipboard.writeText(passVal.value);
                    }

                } else if (id === 'facebookPassCopy') {
                    let idPass = document.querySelectorAll('input');
                    let passIdCount = [1, 3, 5, 7];

                    for (i=0;i<4;i++) {
                        let passVal = idPass[passIdCount[i]];
                        passVal.select();
                        passVal.setSelectionRange(0, 99999);
                        navigator.clipboard.writeText(passVal.value);
                    }

                } else if (id === 'coinPhCopy') {
                    let idPass = document.querySelectorAll('input');
                    let passIdCount = [1, 3, 5, 7];

                    for (i=0;i<4;i++) {
                        let passVal = idPass[passIdCount[i]];
                        passVal.select();
                        passVal.setSelectionRange(0, 99999);
                        navigator.clipboard.writeText(passVal.value);
                    }

                }

            });
        });
        //=====================(copy control)=======================>

        //==========(counting function)============>
        let countingCount = document.querySelectorAll('#account_count');
            countingCount.forEach(count => {//=========(main)=====>
                let counting = 0;
                
                //next btn
                let igBtn = document.querySelectorAll('button')[3];
                    igBtn.addEventListener('click', () => {
                        if (counting <= model().instagramArray.length -2) {
                            counting++
                            count.textContent = counting;
                        }
                    });
                let ytBtn = document.querySelectorAll('button')[7];
                    ytBtn.addEventListener('click', () => {
                        if (counting <= model().youtubeArray.length -2) {
                            counting++
                            count.textContent = counting;
                        }
                    });
                let fbBtn = document.querySelectorAll('button')[11];
                    fbBtn.addEventListener('click', () => {
                        if (counting <= model().facebookArray.length -2) {
                            counting++
                            count.textContent = counting;
                        }
                    });
                let CoinBtn = document.querySelectorAll('button')[15];
                    CoinBtn.addEventListener('click', () => {
                        if (counting <= model().coinArray.length -2) {
                            counting++
                            count.textContent = counting;
                        }
                    });

                //===========(prev btn)=========>
                let prevIg = document.querySelectorAll('button')[2];
                    prevIg.addEventListener('click', () => {
                        if (counting > 0) {
                            counting--;
                            count.textContent = counting;
                        }
                    });
                let prevYt = document.querySelectorAll('button')[6];
                    prevYt.addEventListener('click', () => {
                        if (counting > 0) {
                            counting--;
                            count.textContent = counting;
                        }
                    });
                let prevFb = document.querySelectorAll('button')[10];
                    prevFb.addEventListener('click', () => {
                        if (counting > 0) {
                            counting--;
                            count.textContent = counting;
                        }
                    });
                let prevCoin = document.querySelectorAll('button')[14];
                    prevCoin.addEventListener('click', () => {
                        if (counting > 0) {
                            counting--;
                            count.textContent = counting;
                        }
                    });

                let nextBtnData = document.querySelector('.next');
                nextBtnData.addEventListener('click', () => {
                    counting = 0;
                    count.textContent = counting;
                });

                let prevBtnData = document.querySelector('.prev');
                prevBtnData.addEventListener('click', () => {
                    counting = 0;
                    count.textContent = counting;
                });
            });
        //=====================(copy control)=======================>

    });
}
control();