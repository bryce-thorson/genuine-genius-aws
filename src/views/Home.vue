<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <!-- <div class="list-group" id="list-tab" role="tablist">
          <a 
            class="list-group-item list-group-item-action active" 
            id="list-home-list" 
            data-toggle="list" 
            href="#list-home" 
            role="tab" 
            aria-controls="home"
            >AWS Certification Vouchers Home
          </a>
          <a 
            class="list-group-item list-group-item-action" 
            id="list-profile-list" 
            data-toggle="list"
            aria-controls="profile"
            aria-expanded="true"
            href="#list-profile" 
            role="tab"
            >Foundational
            </a>
          <a 
            class="list-group-item list-group-item-action" 
            id="list-messages-list" 
            data-toggle="list" 
            href="#list-messages" 
            role="tab"
            aria-controls="messages"
            >Associate
            </a>
          <a 
            class="list-group-item list-group-item-action" 
            id="list-settings-list" 
            data-toggle="list" 
            href="#list-settings" 
            role="tab"
            aria-controls="settings"
            >Professional
             or Specialty</a>
          <a 
            class="list-group-item list-group-item-action" 
            id="list-settings-list" 
            data-toggle="list" 
            href="#list-settings" 
            role="tab"
            aria-controls="settings"
            >Shopping
             Cart</a>
          <a 
            class="list-group-item list-group-item-action" 
            id="list-settings-list" 
            data-toggle="list" 
            href="#list-settings" 
            role="tab"
            aria-controls="settings"
            >Help
            </a>
        </div> -->
        <div class="just-padding">
          <div class="list-group list-group-root well">
            <div v-for="item in examList" :key="item">
              <a
                data-toggle="list"
                @click="item.active = !item.active, $set(item, 'selected', !item.selected)"
                class="list-group-item"
                :class="{active: item.selected}"
                :aria-controls="item.controls"
                :href="item.src" 
                role="tab" 
                v-if="!item.collapse"
                >
                <span>
                {{item.title}}
                </span>
              </a>
              <a
                data-toggle="list"
                @click="item.active = !item.active, $set(item, 'selected', !item.selected)"
                :id="item.name" 
                :aria-controls="item.controls" 
                :aria-expanded="item.selected ? 'true' : 'false'" 
                :href="item.src"
                v-if="item.collapse"
                role="tab"
                class="list-group-item dd"
                :class="{active: item.selected}"
                >
                <span>
                  {{item.title}}
                </span>
              </a>
              <div 
                class="list-group collapse"
                :class="{show: item.active}"
                v-if="item.exams" 
                v-for="exam in item.exams" 
                :key="exam.id" 
                :id="exam.id"
                >
                <a 
                  href="#item-2-1" 
                  class="list-group-item child" 
                  data-toggle="collapse"
                  >
                  AWS {{exam.title}}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="tab-content" id="nav-tabContent">
          <div 
            class="tab-pane fade active show"
            id="exam-home" 
            role="tabpanel" 
            aria-labelledby="list-home-list">
            <div class="contentBlock">
              <h1>Purchase AWS Certification Exam Vouchers</h1>
              <p>
                Available for purchase by certification level, these vouchers are redeemable for scheduling AWS Certification exams. We offer
                role-based certifications to validate expertise for those in cloud practitioner, architect, developer, and
                operations roles, plus specialty certifications to validate advanced skills in specific technical areas.
                Learn more about our exams by viewing our
                <a href="https://aws.amazon.com/training/learning-paths/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://aws.amazon.com/training/learning-paths&amp;source=gmail&amp;ust=1556300882488000&amp;usg=AFQjCNFFXQY7jpCwdjN_yU0a1SRjJGE4kw">learning paths</a>, or browse our
                <a href="https://aws.amazon.com/certification/certification-prep/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://aws.amazon.com/certification/certification-prep/&amp;source=gmail&amp;ust=1556300882488000&amp;usg=AFQjCNFTdu2NEHDa082vxcV0IzgO-aQpJA">exam preparation resources</a>.</p>
            </div>
            <div class="contentImg">
              <img title="Available-Certifications-Roadmap-May2019" src="http://market.xvoucher.com/images/librariesprovider32/default-album/available-certifications-roadmap-may2019.png?sfvrsn=58c7ca80_0"
                alt="Available-Certifications-Roadmap-May2019">
            </div>
            <div class="contentBlock">
              <p>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADf0lEQVRoBe2ZT4jNURTH78gOW8lOKZtZUGRjw4rFWJEpFjQlFv6slLCipuywIDWxoEaszIIVGxtRLGyUspNssX76vPpy587vvvv/Tk1Ove77vXfvOefzu+ec+3vnTY1Go5FZA7JuDTCMEf6DxO7kz1+/zecvX2OnZ89bn70yYuHjZ0vm7oNFA8z+fXvNpXNzZuuWzREr06dMtUj29x8/mZt3FlbsxKaNG8yJozPm+JEZw/uaUhXk2/cfY4DXb97+9RGHefGdhF05e2rWHD54QB8Vj1VACB2Fke0RjuIwjj9/+WoMyVzJ7p3T43DbsX2bPsoei0F8DgKAo7YAQc4AbQvA5E9JuGWDkAc4xSjBERwKhQxhdm3+9oq15M+Zk7NSlzQmg+AEAOyELexAahJzEwBy84ebQZVLkSSQew8XzaOnS+NyKiM1yqryy82f65fPR5frKBCqEOXUvXMYcvNAgKkjENhwd5pdZrdD+TMRhBMZ5W4eKIxSnY2Zn2vTC0IYkQu2xN4de03ue18ULNy6MRhu3ofGdx/+VSPC58WT+8UlMgWK3MOmHVaEth3etj4viCYB4bsLmtNypByTiyEJgoQUlHxPgtuVyqcrlOisWzUQAOYuXB2/YmB8kPp8VUAEQYXiBVApTHcQG0J3swZMV5AhCMHwBByTC5rvjt1AJkHwkBlTmVzn7esuIK0hAGoO0gOiOUgviGogPBfhtC09IaqA8Nh98cr8srOgN0QxCBD8wkN0FvBQxwHHtSs1qpOrU9fZDTocFYSU8dmhY6d1uWxsCYGh7KrFARZqMoikNUQRCIs5xEIwPSCKQUIwvSCqgPhgekJUA3FhekNgP1i1qESUWZwLCTmzZ9d01NyQLn1POaeXFpJg1eJwo8z6zgbXQAywu2boGrt0cijnbnd/aL63HYSiVg3nIUfsz4gAbNsdE8o9rVRfQ9ALIsUoY0fcJl1Jw1m63REbALi2YhrjQRAZQzlA9l3if4+chrN0akQnAOyELepoxvxyjAaRgRoNZ+lirNUYTwbBOPlT0nBGh68lSuXz5YF9A9z3WSBSQmlObXLnrJG9SWMRiBTH3N0auyh7Q2MVECn2xTuHJMkMjITwIYxq/e9eFQQnfRVIALUqnfRprA4ixe6ZQAltcfbIXjMQGeBs4L8WzpuY80DrUsfmIKkO5c4PPjTmKu697g+/+ohaem7yhwAAAABJRU5ErkJggg==">
                <span style="font-size: 16px;">
                  <a href="/aws/Foundational">Foundational Level Certifications </a>
                </span>
                - The lowest level AWS Certification, validating approximately six months of fundamental AWS Cloud and industry knowledge
              </p>
              <p>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADrUlEQVRoBe2ZO2wTQRCGxxCU+IWIqEhJFUGJqJIqskRji4oubiiQkoJ0cUNJ43Q0iURBEdKlQnaDZKUiFVCCUqUMHS+/EgVk9FuM2fPt3u3rNlLENnt3vp2Zb3dmbj2bG41GI7oE7colYBgj/AcxWcmjL79MXrd6d8ZqlOYgAGy1evT++JwW5q9So1aklTuzmqPNXstlEezd0xE1Wz168/E0Zs3929dos1aixVt+59A7yN7hkLY7feoO/yXDxYUZOjqJutfqcp7WK0Uqz+VisDYPvIHAfZ7td+nk2++JHaI7iW7GL5TzuTHM6lKeH1n3ziAwHAAA4QYD60sFWqsU+NGkP/h8Rs1WPwb8/FGZ4Ha2zRoEcQAX2ns3jOh+eG+OGrVSqsvsdAb0+nAQcUGAAAgradqsQBDEzXYvZoRpEKuSAmIHMWQSP0YgcJ+tdi8SuJi99UqBsBK2DXJ3Ov2YezaqJW25WiCIg2a7Twefzia2chyYztxEgOQCK73dGUTiBxlvs1pKjZ9EECw9YmDal1fuzlKjWrTyZYn9kUe2OpUgsnSqOzsRyyxvVF4wjh9JulZuGj8cn0+WGG6EbLL/dD51iS3tjg1D7L2oX6dXT24QJhANH1nRvcVBShDxpbeNm9pBJ47zcY2UjAlkGJVMLRCTNKhSpHou7gRU7+B5mg1aIEkKXH5DlnrQ/CrdXJrKvTAQQGBrg4Ye9y7tQkBECDYeMNiH2bbgIDIIGI/MaLPHYvCgIEkQ4zTr8GcrGEiWEFiVICBZQwQBCQHhDQQbPVnGCQXhBQQQj19+p43dn5FvQUgIgDjVZBiCKyT8gYNg8Rr3aEixrtnpr6hY5wSysfsj8m8R0mUAWUNAvlPWwn90zHJay3IlWLcTCKqFcJUkmBAQzisCAUkwoSC8gKhgQkJ4A5mGCQ0B/VpZC8U4nYIzuxmDoffRUBhPO2NRgmBWuaEkhA+cqoLB76H3eVwgq+SU8/L8pCwHwaisCs4iuOzatDAOGYkgrMR3wZnlTvdcnENxXGw6hXEtEAiFEtkplE3BWTSSr+G6ssL4WqWoVUvTBmGFPgrOLAs95PkojBuDsBGYQduCM2SoSqI4ILIpjFuDwJgkn8ZRg6yYwGN8F8adQHh1dGfXdRVZn6z3AsKCVf5eX86Pi8/4nRu+UyYHOTxO1XsFYSWyDMS/ofeV6USZmYBAAWJh+rDU5bBTNFp2nRkIK+P4wVm6y/Ezy1P1mYOoFPt+Lt+B+dYSQN4fpiBdNuDmus8AAAAASUVORK5CYII=">
                <span style="font-size: 16px;">
                  <a href="/aws/Associate">
                    <span style="font-size: 16px;">Associate Level Certifications</span></a>
                </span>- The first level role-based certification, validating one year of experience solving problems and implementing
                solutions using the AWS Cloud</p>
              <p>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADkElEQVRoBe2avWtUQRDAN3qiQaNFiiMaoka84oRIRCGNCLbaWOkfYBq7a1JaWNpcp8XZ2WhnYx3sBGNAwSsuGE3wgxQRooiCwsnvYC57727f7dfbg+BC2PexuzO/3ZnZvXkZa7fbbbUHyr49wNBB+A/ispKrO9suzb3alrx6WXYCoLGxpqinDo2ru5Xz6sKxScvebs3GinD2r79/qcZmSz3f+tSnzZXJsqrNnuuA9b0MeBAV5MffP+rpl4/qyecPimsplcNHVevnd7nt1IsnK+rm8VNqonSg57nvTTSQF9tbqr7+TrEaUgConal2zEk3M3kPRG22qq6Vp+WRdx0MwkzX3zc7fiBaoODtmbPq1onT8qhbY26YnQm429DxwhsE06mvN/v8AOWByDMZMcHGRqtHXVZmcabi5T9eIPjAo821Hj8gGhGViE62hVXBHDFLKUwAk+HqP04g2Pm91pses0BxohDRyLcwLuapBwTGZXVs/ccKhJkDAIFSZOYwo1gF/8Fc9YjHShMwCBx5JReEATEhTEkvzBLRJs8P9PYu174yjSDM/lLztdfsuChuamuyAlM0NB4aV3e+dSHkePFwbmHoEpsUc32OTOTxxzWF1dIDgz6mEURv9Hj+srXT6f1iXOMjzy5dHTqUFUgRviCa6Y4tz3xqKxCfgW36EKVuvFruCbs2/Qa1GRkIEIR0VuTO25fBMCMBEQiZ2RgwyUGyEAIzdXBc8edbkoKYINi1H8wtBG2wyUCKhGAVk4AUDZEEJAVENBCO3/oRXBw2FUQUEADYB7J7QUqIYBCBYB/Q94LUEIAEJeiWmivdEzKDCQx1tsQIsdkx9fugqHW/erEv9o8CAqAgEJtZtmmjz6zvdRAIQvMUzXvnq7CpXzCICSYlBDpEAcnCpIZAvlXUIpNikzATAE6xsX5VEjxIjA8rRpAj+3dfkdokJWSTcAYmVhmUGJ8o7eqlyzGmg2jExlZEwllXYNA1G61LYpwxckFoIEsbM+E8SHmR5ZsYHwoiQmMmnGVMvQ5NjFuDiNAYCWcZi5rxYiTGnUFECfzHN+HMGKaUqHxfETm2tTcIAvAf1yS3Tx8bmCAQEWA7u6GrKPIG1VFAZGCTvfPBBmfWf0W6fsgRGaY6KogIEXPDjLJFPhDZnBSyffPuCwFBIBDZPSHkY2ceBO8KAxHBmBNmdb08Xdi/byQBEaCi62jH+KIVHTb+Pxt5bYQUS4yCAAAAAElFTkSuQmCC">
                <span style="font-size: 16px;">
                  <a href="/aws/ProfessionalSpecialty">Professional Level Certifications</a>
                </span> - The highest level role-based certification, validating two years of comprehensive experience designing,
                operating, and troubleshooting solutions using the AWS Cloud</p>
              <p>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADuElEQVRoBe2Zu28TQRCHJ4jQGKI0gcINKYJ4Km4SRVRIhgrJEmUa05gqkaC1/wC7JZI73OAmZSQXVFiiAYWkccRTRCI0bkiDQK5SGP1OzGnvsXf7uo0Usc2u17sz++3OzN7NzUyn0ymdgXLuDDAECP9BdE7y6OsvneFGY88bzVKcBIBee0Qf9o7pcrlEjdYyrVXLirP1hs0U4eyTPye03f1Eg5eHidXcWV2gRqtCi9fnE//ZdDgHGfQPA4jJ75NwXYs35unoS9S8qo+uBkClS7PhOJuGM5CPe8f0vLlPP8eTcD2iOaF/q7kfmBkPKM3N0vrmLarVl7jLuLYGkS2wVr9G65s3EwvbHY6p1z5IAD/rrNDt1YXEeNUOYxD4AXwAviAWVZPZ7n6mQf8biSYI/3naWQkCgyhTpW0EMtz5Qb3OKLEImInOrmIzENUgTyyBuT1eIh3/0QKBH7zojCKOCz+ACeEkTIsYplkG/KfRrCjLVQKBH/Q6B7T7esx6CIrgBzXNnQsFpDRwMjA5MWAg4j1pVnJPOhOE/SBuy2v3y9RoLhvZcsr6I12mOqUgaeFUdXciKzP8IbMCWbiWPjTisYKPGGaEaLK18yD3iA3XnZgG32t171K7f4+wgSiIcO8F8xYnSUHEQb3hQ2WnE+e5aCMKYgMZRiZTCUQnDMoUyfr51GX/c//FnEcZJRAW5rpGlGpUXyXuERM9pwYCCDx7oaCOX4q6MKcCIkLwggGD5zDT4h0kDQKLR2S8Ui6ZcpBXkCyIIMxavGx5AykSAsfoBaRoCC8gPiCcgeBBLy3i+IJwAgKIVv0NtTfeRe4CnxAAscprMQRnSPiCg2Cxjd8oCLG20emfqERlBdLeeBt5W4T0NICiISDfKmoh0YZdzitFngTrtgJBthCmkgXjA8L6RCAgC8YXhBMQGYxPCGcgcRjfENCvFLUQiQLHznlLYzNjMNQuChLj33O+sUhBsKtccLnh5pZlMHgcapefC9IyOaW5C6K6sC1NB2FEUQnnULukgfd4WAEyOVywsbLEOMZkgrAQ1wlnlhuvOTlnkhhXAoFCKHGVcI4D4DfM1yYxrgzCymG32LH4sesknFkWaleJcW0QXgR20DThDBmylKhpYtwYBIthm9ZJcpvM4c3Lqq1AWLDq7tqeIutLq52AsGCZveMbCpLPrvyK9Ym1UxAWnBaB+D/UAMPl6jKnXAgIFsu+IN4JNh87xY1IaxcGwsrYf/AtXedDKc9XrQsHUV2I7TirN0Rb5S7n/wVIIWJJAUIQNQAAAABJRU5ErkJggg==">
                <span style="font-size: 16px;">
                  <a href="/aws/ProfessionalSpecialty">Specialty Level Certifications
                    <span style="font-size: 12px;"> </span>
                  </a>
                  <span style="font-size: 12px;">-</span>
                  <span style="font-size: 12px;">S</span>
                </span>pecialized skill-specific certification, validating as little as six months to as much as two years of deep
                technical experience in the associated Specialty domain as it relates to the AWS Cloud</p>
            </div>
            <div class="contentBlock">
              <h1>
                <strong>
                  <span style="font-size: 24px;">Approved AWS Certification Testing Centers</span>
                </strong>
              </h1>
              <p>
                <strong>
                  <span style="font-size: 14px;">Pearson VUE</span>
                  
                </strong>
                From online practice tests to high-stakes, proctored exams that require the industry’s most secure testing environments,
                Pearson VUE is the leader in computer-based testing — and much more. See all available Pearson VUE testing
                centers
                <a href="https://home.pearsonvue.com/test-taker.aspx" target="_blank">here</a>.</p>
              <p>
                <strong>
                  <span style="font-size: 14px;">PSI</span>
                  
                </strong>
                PSI has 70 years of experience with providing solutions to federal and state agencies, corporations, professional associations
                and certifying bodies worldwide. See all available PSI testing centers
                <a href="https://awsavailability.psiexams.com/">here</a>.</p>
            </div>
          </div>
          <div 
            class="tab-pane fade" 
            id="examFoundational" 
            role="tabpanel" 
            aria-labelledby="list-foundational-list"
            >
            <div class="content">
              <h1>AWS Foundational Certification Exam</h1>
              <p class="mb-5">
                Foundational certification exams validate the lowest level of AWS knowledge, 
                requiring only six months experience with the platform. 
                This certification is ideal for decision-makers, business roles, and those 
                seeking general knowledge of the AWS cloud. AWS currently offers one foundational-level 
                certification: <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">AWS Certified Cloud Practitioner</a>.
              </p>
              <div class="exam-area" v-for="exam in examList[1].exams" :key="exam.id">
                <div class="exam" :class="{invisible:!exam.visible}">
                  <h4 class="exam-title">
                    AWS Certification:<br>{{exam.title}}
                  </h4>
                  <p class="price">USD: ${{exam.price}}</p>
                  <div class="quantity">
                    <label for="quantity">Quantity: </label>
                    <div class="form-inline">
                      <input style="max-width: 50px;" type="text" maxlength="3" value="1" name="qty" class="form-control mr-2" id="quantity"> 
                      <router-link 
                        href="#" 
                        class="btn btn-primary" 
                        title="quantity"
                        to="/Cart"
                        >Add To Cart
                      </router-link>
                    </div>
                    <p class="disclaimer">{{exam.disclaimer}}<a href="">{{exam.location}}</a> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div 
            class="tab-pane fade" 
            id="examAssociate" 
            role="tabpanel" 
            aria-labelledby="list-messages-list"
            >
            <div class="content">
              <h1>AWS Associate Certification Exams</h1>
              <p>Associate certification exams are aligned to job roles as they 
                relate to the AWS Cloud. They validate one year of experience 
                solving problems and implementing solutions in the AWS Cloud 
                and drive towards professional certification within the aligned job
                 role. AWS currently offers three associate-level certifications: 
                <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" target="_blank">AWS Certified Solutions Architect</a>, 
                <a href="https://aws.amazon.com/certification/certified-sysops-admin-associate/" target="_blank">AWS Certified SysOps Administrator</a>
                , and <a href="https://aws.amazon.com/certification/certified-developer-associate/" target="_blank">AWS Certified Developer</a>.
              </p>
              <div class="exam-area" v-for="exam in examList[2].exams" :key="exam.id">
                <div class="exam" :class="{invisible:!exam.visible}">
                  <h4 class="exam-title">
                    AWS Certification:<br>{{exam.title}}
                  </h4>
                  <p class="price">USD: ${{exam.price}}</p>
                  <div class="quantity">
                    <label for="quantity">Quantity: </label>
                    <div class="form-inline">
                      <input style="max-width: 50px;" type="text" maxlength="3" value="1" name="qty" class="form-control mr-2" id="quantity"> 
                      <a href="#" class="btn btn-primary" title="quantity">Add To Cart</a>
                    </div>
                    <p class="disclaimer">{{exam.disclaimer}}<a href="">{{exam.location}}</a> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div 
            class="tab-pane fade" 
            id="list-
            settings" role="t
            abpanel" aria-labelledby="list-
            settings-list">...</div>
            <div 
            class="tab-pane fade" 
            id="examProfessional" 
            role="tabpanel" 
            aria-labelledby="list-professional-list"
            >
            <div class="content">
              <h1>AWS Professional Certification Exam</h1>
              <p class="mb-5">
                Professional certification exams are the highest-level role-based certification 
                exams available through AWS. They validate two years of comprehensive experience 
                designing, operating, and troubleshooting solutions using the AWS Cloud. 
                AWS currently offers two professional-level certifications: 
                <a href="https://aws.amazon.com/certification/certified-solutions-architect-professional/" >AWS Certified Solutions Architect</a>
                and 
                <a href="https://aws.amazon.com/certification/certified-devops-engineer-professional/">AWS Certified DevOps Engineer.</a>
                <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">AWS Certified Cloud Practitioner.</a>
              </p>
              <h1>AWS Specialty Certification Exams</h1>
              <p>Specialty certifications validate specialized knowledge in specific skill domains 
                as they relate to the AWS platform. As AWS’s products and services expand, more specialty
                 certifications will be made available for specific use cases and specialized skill areas. 
                 Recommended experience ranges widely based on the domain, from six months up to two years’ 
                 experience with the associated domain. AWS currently offers five specialty-level certifications: 
                 
                  <a href="https://aws.amazon.com/certification/certified-advanced-networking-specialty/"> AWS Certified Advanced Networking Specialty</a>, 
                  <a href="https://aws.amazon.com/certification/certified-alexa-skill-builder-specialty/"> AWS Certified Alexa Skill Builder Specialty</a>, 
                  <a href="https://aws.amazon.com/certification/certified-big-data-specialty/"> AWS Certified Big Data Specialty</a>,
                  <a href="https://aws.amazon.com/certification/certified-machine-learning-specialty/"> AWS Certified Machine Learning Specialty</a>, and 
                  <a href="https://aws.amazon.com/certification/certified-security-specialty/"> AWS Certified Security Specialty.</a>
                </p>

              <div class="exam-area" v-for="exam in examList[3].exams" :key="exam">
                <div class="exam" :class="{invisible:!exam.visible}">
                  <h4 class="exam-title">
                    AWS Certification:<br>{{exam.title}}
                  </h4>
                  <p class="price">USD: ${{exam.price}}</p>
                  <div class="quantity">
                    <label for="quantity">Quantity: </label>
                    <div class="form-inline">
                      <input style="max-width: 50px;" type="text" maxlength="3" value="1" name="qty" class="form-control mr-2" id="quantity"> 
                      <a href="#" class="btn btn-primary" title="quantity">Add To Cart</a>
                    </div>
                    <p class="disclaimer">{{exam.disclaimer}}<a href="">{{exam.location}}</a> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      selected: 1,
      examList: [
        {
          title: 'AWS Certification Vouchers Home',
          collapse: false,
          src: '#exam-home',
          controls: 'exam-home',
          active: true,
          name: 'list-home-list',
          id: 1,
          content: {
            title: 'Purchase AWS Certification Exam Vouchers',
            intro: `Available for purchase by certification level, these vouchers are redeemable for scheduling AWS Certification exams. We offer
                    role-based certifications to validate expertise for those in cloud practitioner, architect, developer, and
                    operations roles, plus specialty certifications to validate advanced skills in specific technical areas.
                    Learn more about our exams by viewing our`,
            links: [
              {
                text: 'learning paths',
                url: 'https://aws.amazon.com/training/learning-paths/',
                id: 1
              },
              {
                text: 'exam preparation resources',
                url: 'https://aws.amazon.com/certification/certification-prep/',
                id: 2
              }
            ]
              }
            },
            {
          title: 'Foundational',
          collapse: true,
          src: '#examFoundational',
          controls: 'exam-home',
          active: false,
          name: 'list-foundational-list',
          id: 2,
          exams: [
            {
              title: 'Foundational-Level Exam Voucher – Pearson VUE',
              price: 100.00,
              disclaimer: 'Pearson VUE certification exam vouchers are only valid for scheduling exams at ',
              location: 'Pearson VUE testing centers',
              visible: true,
              id: 1,
            },
            {
              title: 'Foundational-Level Exam Voucher – PSI',
              price: 100.00,
              disclaimer: 'PSI certification exam vouchers are only valid for scheduling exams at ',
              location: 'PSI testing centers',
              visible: true,
              id: 2,
            }
          ]
        },
        {
          title: 'Associate',
          collapse: true,
          src: '#examAssociate',
          controls: 'exam-associate',
          active: false,
          name: 'list-associate-list',
          id: 3,
          exams: [
            {
              title: 'Associate Certification Exam Voucher – Pearson VUE',
              price: 150.00,
              disclaimer: 'Pearson VUE certification exam vouchers are only valid for scheduling exams at ',
              location: 'Pearson VUE testing centers',
              visible: true,
              id: 3,
            },
            {
              title: 'Associate Certification Exam Voucher – PSI',
              price: 150.00,
              disclaimer: 'PSI certification exam vouchers are only valid for scheduling exams at ',
              location: 'PSI testing centers',
              visible: true,
              id: 4,
            }
          ]
        },
        {
          title: 'Professional or Specialty',
          collapse: true,
          src: '#examProfessional',
          controls: 'exam-professional',
          active: false,
          name: 'list-professional-list',
          id: 4,
          exams: [
            {
              title: 'Professional or Specialty Certification Exam Voucher – Pearson VUE',
              price: 300.00,
              disclaimer: 'Pearson VUE certification exam vouchers are only valid for scheduling exams at ',
              location: 'Pearson VUE testing centers',
              visible: true,
              id: 5,
            },
            {
              title: 'Professional or Specialty Certification Exam Voucher – PSI',
              price: 300.00,
              disclaimer: 'PSI certification exam vouchers are only valid for scheduling exams at ',
              location: 'PSI testing centers',
              visible: true,
              id: 6,
            }
          ]
        },
        {
          title: 'Shopping Cart',
          collapse: false,
          id: 5,
        },
        {
          title: 'Help',
          collapse: false,
          id: 6,
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";


.container {
  margin-top: 64px;
  max-width: 1600px;
  & h1 {
    font-size: 2rem;
    font-weight: 900;
  }
  & .tab-content {
    text-align: left;
    padding-bottom: 300px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    & .contentBlock {
      margin-bottom: 1rem;
    }
    & .contentImg {
      width: 100%;
      display: flex;
      object-fit: contain;
    }
  }
  & .list-group {
    text-align: left;
    & .list-group-item {
      border-radius: 0;
      padding-left: 3rem;
      &.dd {
        position: relative;
        &::before {
          position: absolute;
          width: 0; 
          height: 0;
          left: 1.2rem;
          border-bottom: 10px solid transparent; 
          border-top: 10px solid transparent;
          border-left:10px solid #e5e5e5;
          content: '';
          transition: all 0.15s ease-in-out;
        }
        &.active {
          &::before {
            position: absolute;
            width: 0; 
            height: 0; 
            top: 0.9rem;
            left: 1.1rem;
            border-bottom: 10px solid transparent; 
            border-top: 10px solid transparent;
            border-left:10px solid $aws--blue;
            transform: rotate(90deg);
            content: '';
          }
        }
      }
      color: #333;
      &.child {
        background-color: #F8F8F8;
        border-color: #E8E8E8;
      }
    }
  }
  & .exam-area {
    & .exam {
      padding: 1rem 0;
      & .exam-title {
        font-weight: bold;
      }
      & .price {
        font-weight: bold;
      }
      & .disclaimer {
        padding: 1rem 0;
      }
      &.invisible {
        display: none;
      }
    }
  }
}
</style>

