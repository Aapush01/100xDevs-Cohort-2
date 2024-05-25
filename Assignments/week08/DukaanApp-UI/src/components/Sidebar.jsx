import React from 'react'
import avatar from '../assets/avatar.png'

function Sidebar() {
    return (
        <div>

            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden  hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:text-white-500 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" class="fixed text-white-200 top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-blue-800 flex flex-col gap-6">
                    <div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img src={avatar} alt="" className='rounded h-10' />
                            </div>
                            <div>
                                <div>
                                    <p class="h-3.8 leading-5.5 text-white-500 font-inter font-medium">SHAHID</p>
                                    <p className='leading-4 h-4 underline font-normal'>Visit store</p>
                                </div>
                            </div>
                            <div className='ml-auto'>
                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.846847 1.22185C1.26727 0.801426 1.92516 0.763206 2.38876 1.10719L2.52157 1.22185L8 6.69974L13.4784 1.22185C13.8988 0.801426 14.5567 0.763206 15.0203 1.10719L15.1532 1.22185C15.5736 1.64227 15.6118 2.30016 15.2678 2.76376L15.1532 2.89657L8.83736 9.21236C8.41694 9.63278 7.75905 9.671 7.29545 9.32702L7.16264 9.21236L0.846847 2.89657C0.384384 2.43411 0.384384 1.68431 0.846847 1.22185Z" fill="white" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div>

                        <ul class="space-y-2 font-medium">
                            <li>

                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path d="M16.9398 18.75H13.0675C12.7165 18.75 12.3797 18.6111 12.1307 18.3636C11.8816 18.1162 11.7407 17.7802 11.7385 17.4292V12.1622H8.22722V17.4292C8.22505 17.7802 8.08407 18.1162 7.83507 18.3636C7.58606 18.6111 7.24925 18.75 6.89818 18.75H3.02593C2.62123 18.75 2.2331 18.5892 1.94693 18.3031C1.66077 18.0169 1.5 17.6288 1.5 17.2241V7.99465C1.50032 7.75707 1.55611 7.52284 1.66293 7.31062C1.76975 7.0984 1.92465 6.91405 2.11529 6.77227L9.15426 1.55457C9.41825 1.35686 9.73919 1.25 10.069 1.25C10.3988 1.25 10.7198 1.35686 10.9837 1.55457L17.8832 6.76406C18.0665 6.91176 18.2136 7.09945 18.3131 7.31275C18.4126 7.52605 18.462 7.75931 18.4575 7.99465V17.2241C18.4586 17.4241 18.4201 17.6223 18.3443 17.8074C18.2686 17.9925 18.1569 18.1608 18.0159 18.3026C17.8749 18.4444 17.7072 18.5569 17.5225 18.6337C17.3378 18.7105 17.1398 18.75 16.9398 18.75ZM13.1496 17.3553H16.9562C16.9896 17.3532 17.0209 17.3385 17.0438 17.3141C17.0666 17.2897 17.0793 17.2575 17.0793 17.2241V7.99465C17.08 7.97543 17.0758 7.95635 17.0672 7.93915C17.0586 7.92195 17.0458 7.90718 17.03 7.89621L10.1141 2.68671C10.0911 2.67119 10.064 2.6629 10.0362 2.6629C10.0084 2.6629 9.98128 2.67119 9.95825 2.68671L2.92748 7.90441C2.91051 7.91673 2.89653 7.93271 2.88659 7.95117C2.87664 7.96964 2.87099 7.99011 2.87006 8.01106V17.2241C2.87006 17.2589 2.88389 17.2923 2.9085 17.3169C2.93312 17.3415 2.96651 17.3553 3.00132 17.3553H6.80794V12.0228C6.81009 11.6905 6.94303 11.3725 7.17796 11.1376C7.41289 10.9027 7.73091 10.7697 8.06314 10.7676H11.878C12.0439 10.7665 12.2084 10.7981 12.3621 10.8606C12.5158 10.9231 12.6557 11.0153 12.7737 11.1318C12.8918 11.2484 12.9858 11.387 13.0503 11.5399C13.1148 11.6928 13.1485 11.8569 13.1496 12.0228V17.3553Z" fill="white" />
                                        </g>
                                    </svg>

                                    <span class="ms-3">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3001 1.98737C14.1148 1.19626 13.4087 0.625 12.5834 0.625H7.42281L7.29189 0.629913L7.15581 0.645423L7.02199 0.671421C6.23088 0.856753 5.65962 1.56287 5.65962 2.38819V2.60323H4.19746L4.04743 2.60717C2.70608 2.67794 1.61719 3.69145 1.61719 4.96848V17.0098L1.62163 17.1505C1.70114 18.4071 2.83856 19.375 4.19746 19.375H15.8087L15.9587 19.3711C17.3001 19.3003 18.389 18.2868 18.389 17.0098V4.96848L18.3845 4.82771C18.305 3.57113 17.1676 2.60323 15.8087 2.60323H14.3466V2.38819L14.3416 2.25726L14.3261 2.12119L14.3001 1.98737ZM14.3466 3.89336V4.10837C14.3466 4.93369 13.7753 5.63981 12.9842 5.82514L12.8504 5.85114L12.7143 5.86665L12.5834 5.87156H7.42281C6.5975 5.87156 5.89138 5.3003 5.70604 4.5092L5.68005 4.37537L5.66454 4.2393L5.65962 4.10837V3.89336H4.19746C3.51197 3.89336 2.974 4.33572 2.91308 4.86776L2.90733 4.96848V17.0098C2.90733 17.5516 3.40497 18.0259 4.07074 18.0798L4.19746 18.0849H15.8087C16.4942 18.0849 17.0322 17.6425 17.0931 17.1105L17.0988 17.0098V4.96848C17.0988 4.42661 16.6012 3.95238 15.9354 3.89846L15.8087 3.89336H14.3466ZM7.68057 1.61411H12.3256C12.7726 1.61411 13.1621 1.90084 13.3034 2.31864L13.3334 2.42573L13.3516 2.53612L13.3577 2.64625L13.3572 3.86708L13.3482 3.98931L13.3269 4.10085L13.2899 4.21899C13.1812 4.50363 12.9513 4.72443 12.6618 4.8251L12.5506 4.85711L12.4343 4.87652L12.3256 4.88246L7.66384 4.88191L7.54161 4.87291L7.43006 4.85165L7.31193 4.81468C7.02729 4.70593 6.80648 4.47604 6.70581 4.18656L6.6738 4.07533L6.65439 3.95905L6.64846 3.85031L6.649 2.62948L6.65801 2.50725L6.67926 2.39571L6.71623 2.27757C6.82499 1.99293 7.05487 1.77213 7.34435 1.67146L7.45558 1.63945L7.57186 1.62004L7.68057 1.61411Z" fill="white" />
                                            <path d="M5.46602 10.5959C5.94124 10.5959 6.32649 10.2107 6.32649 9.73547C6.32649 9.26025 5.94124 8.875 5.46602 8.875C4.99079 8.875 4.60555 9.26025 4.60555 9.73547C4.60555 10.2107 4.99079 10.5959 5.46602 10.5959Z" fill="white" />
                                            <path d="M8.04746 8.9485C7.61543 8.9485 7.26521 9.29872 7.26521 9.73075C7.26521 10.1628 7.61543 10.513 8.04746 10.513H14.6183C15.0503 10.513 15.4006 10.1628 15.4006 9.73075C15.4006 9.29872 15.0503 8.9485 14.6183 8.9485H8.04746Z" fill="white" />
                                            <path d="M7.26524 14.1522C7.26524 13.7202 7.61547 13.3699 8.04749 13.3699H14.6184C15.0504 13.3699 15.4006 13.7202 15.4006 14.1522C15.4006 14.5842 15.0504 14.9344 14.6184 14.9344H8.04749C7.61547 14.9344 7.26524 14.5842 7.26524 14.1522Z" fill="white" />
                                            <path d="M5.46605 15.0174C5.94127 15.0174 6.32652 14.6321 6.32652 14.1569C6.32652 13.6817 5.94127 13.2964 5.46605 13.2964C4.99082 13.2964 4.60558 13.6817 4.60558 14.1569C4.60558 14.6321 4.99082 15.0174 5.46605 15.0174Z" fill="white" />
                                        </g>
                                    </svg>

                                    <span class="flex-1 ms-3 whitespace-nowrap">Orders</span>

                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path d="M17.0783 10.8327C17.7686 10.8327 18.3283 11.3923 18.3283 12.0827V17.0827C18.3283 17.773 17.7686 18.3327 17.0783 18.3327H12.0783C11.3879 18.3327 10.8283 17.773 10.8283 17.0827V12.0827C10.8283 11.3923 11.3879 10.8327 12.0783 10.8327H17.0783ZM7.91406 10.8327C8.60442 10.8327 9.16406 11.3923 9.16406 12.0827V17.0827C9.16406 17.773 8.60442 18.3327 7.91406 18.3327H2.91406C2.22371 18.3327 1.66406 17.773 1.66406 17.0827V12.0827C1.66406 11.3923 2.22371 10.8327 2.91406 10.8327H7.91406ZM16.9116 12.2493H12.2449V16.916H16.9116V12.2493ZM7.7474 12.2493H3.08073V16.916H7.7474V12.2493ZM7.91406 1.66602C8.60442 1.66602 9.16406 2.22566 9.16406 2.91602V7.91602C9.16406 8.60637 8.60442 9.16602 7.91406 9.16602H2.91406C2.22371 9.16602 1.66406 8.60637 1.66406 7.91602V2.91602C1.66406 2.22566 2.22371 1.66602 2.91406 1.66602H7.91406ZM17.0783 1.66602C17.7686 1.66602 18.3283 2.22566 18.3283 2.91602V7.91602C18.3283 8.60637 17.7686 9.16602 17.0783 9.16602H12.0783C11.3879 9.16602 10.8283 8.60637 10.8283 7.91602V2.91602C10.8283 2.22566 11.3879 1.66602 12.0783 1.66602H17.0783ZM7.7474 3.08268H3.08073V7.74935H7.7474V3.08268ZM16.9116 3.08268H12.2449V7.74935H16.9116V3.08268Z" fill="white" />
                                        </g>
                                    </svg>

                                    <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.835938 1.03633C0.835938 0.651673 1.14641 0.339844 1.52939 0.339844H13.0838C13.4668 0.339844 13.7772 0.651673 13.7772 1.03633V11.094C13.7772 11.4787 13.4668 11.7905 13.0838 11.7905H1.52939C1.14641 11.7905 0.835938 11.4787 0.835938 11.094V1.03633ZM2.22284 1.73282V10.3975H12.3903V1.73282H2.22284Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3903 4.90469C12.3903 4.52003 12.7008 4.2082 13.0838 4.2082H16.1649C16.3489 4.2082 16.5252 4.28158 16.6553 4.4122L18.9662 6.7332C19.0962 6.86381 19.1693 7.04097 19.1693 7.22569V11.094C19.1693 11.4787 18.8588 11.7905 18.4758 11.7905L13.0838 11.7905C12.7008 11.7905 12.3903 11.4787 12.3903 11.094V4.90469ZM13.7772 5.60118V10.3975H17.7824V7.51419L15.8777 5.60118H13.7772Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99566 11.7905C4.31509 11.7905 3.76338 12.3446 3.76338 13.0281C3.76338 13.7117 4.31509 14.2658 4.99566 14.2658C5.67623 14.2658 6.22794 13.7117 6.22794 13.0281C6.22794 12.3446 5.67623 11.7905 4.99566 11.7905ZM2.37648 13.0281C2.37648 11.5753 3.54912 10.3975 4.99566 10.3975C6.4422 10.3975 7.61484 11.5753 7.61484 13.0281C7.61484 14.481 6.4422 15.6588 4.99566 15.6588C3.54912 15.6588 2.37648 14.481 2.37648 13.0281Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0095 11.7905C14.3289 11.7905 13.7772 12.3446 13.7772 13.0281C13.7772 13.7117 14.3289 14.2658 15.0095 14.2658C15.6901 14.2658 16.2418 13.7117 16.2418 13.0281C16.2418 12.3446 15.6901 11.7905 15.0095 11.7905ZM12.3903 13.0281C12.3903 11.5753 13.563 10.3975 15.0095 10.3975C16.456 10.3975 17.6287 11.5753 17.6287 13.0281C17.6287 14.481 16.456 15.6588 15.0095 15.6588C13.563 15.6588 12.3903 14.481 12.3903 13.0281Z" fill="white" />
                                    </svg>

                                    <span class="flex-1 ms-3 whitespace-nowrap">Delivery</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1074 0.290837C13.0654 -0.231661 14.2333 0.461666 14.2333 1.55281V14.4471C14.2333 15.5383 13.0653 16.2316 12.1074 15.7091L4.04696 11.3125H2.375C1.23591 11.3125 0.3125 10.3891 0.3125 9.24999V6.74999C0.3125 5.6109 1.23591 4.68749 2.375 4.68749H4.04692L12.1074 0.290837ZM12.6083 1.86866L5.06662 5.9823V10.0176L12.6083 14.1313V1.86866ZM1.9375 6.74999C1.9375 6.50836 2.13338 6.31249 2.375 6.31249H3.4375V9.68749H2.375C2.13338 9.68749 1.9375 9.49161 1.9375 9.24999V6.74999Z" fill="white" />
                                        <path d="M18.6387 3.32573C18.919 3.67613 18.8622 4.18743 18.5118 4.46775L16.4284 6.13442C16.078 6.41474 15.5667 6.35793 15.2864 6.00753C15.0061 5.65713 15.0629 5.14583 15.4133 4.86551L17.4966 3.19884C17.847 2.91852 18.3583 2.97533 18.6387 3.32573Z" fill="white" />
                                        <path d="M15.5041 8.02081C15.5041 7.57208 15.8679 7.20831 16.3166 7.20831H18.8583C19.307 7.20831 19.6708 7.57208 19.6708 8.02081C19.6708 8.46955 19.307 8.83331 18.8583 8.83331H16.3166C15.8679 8.83331 15.5041 8.46955 15.5041 8.02081Z" fill="white" />
                                        <path d="M16.4284 10.2822C16.078 10.0019 15.5667 10.0587 15.2864 10.4091C15.0061 10.7595 15.0629 11.2708 15.4133 11.5511L17.4966 13.2178C17.847 13.4981 18.3583 13.4413 18.6387 13.0909C18.919 12.7405 18.8622 12.2292 18.5118 11.9489L16.4284 10.2822Z" fill="white" />
                                    </svg>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Marketing</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66406 8.93711C1.66406 8.50909 2.01104 8.16211 2.43906 8.16211H6.81406C7.24208 8.16211 7.58906 8.50909 7.58906 8.93711C7.58906 9.36513 7.24208 9.71211 6.81406 9.71211H3.21406V14.5621C3.21406 14.9901 2.86708 15.3371 2.43906 15.3371C2.01104 15.3371 1.66406 14.9901 1.66406 14.5621V8.93711Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.414062 14.5621C0.414062 14.1341 0.761042 13.7871 1.18906 13.7871H16.8141C17.2421 13.7871 17.5891 14.1341 17.5891 14.5621C17.5891 14.9901 17.2421 15.3371 16.8141 15.3371H1.18906C0.761042 15.3371 0.414062 14.9901 0.414062 14.5621Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03906 5.18711C6.03906 4.75909 6.38604 4.41211 6.81406 4.41211H11.1891C11.6171 4.41211 11.9641 4.75909 11.9641 5.18711C11.9641 5.61513 11.6171 5.96211 11.1891 5.96211H7.58906V14.5621C7.58906 14.9901 7.24208 15.3371 6.81406 15.3371C6.38604 15.3371 6.03906 14.9901 6.03906 14.5621V5.18711Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4141 1.43711C10.4141 1.00909 10.761 0.662109 11.1891 0.662109H15.5641C15.9921 0.662109 16.3391 1.00909 16.3391 1.43711V14.5621C16.3391 14.9901 15.9921 15.3371 15.5641 15.3371H11.1891C10.761 15.3371 10.4141 14.9901 10.4141 14.5621V1.43711ZM11.9641 2.21211V13.7871H14.7891V2.21211H11.9641Z" fill="white" />
                                    </svg>

                                    <span class="flex-1 ms-3 whitespace-nowrap">Analytics</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 11.75H1.47727C0.661397 11.75 0 11.1904 0 10.5V1.75C0 1.05964 0.661397 0.5 1.47727 0.5H14.7727C15.5886 0.5 16.25 1.05964 16.25 1.75L16.25 4.25H18.5227C19.3386 4.25 20 4.8796 20 5.65625V14.0938C20 14.8704 19.3386 15.5 18.5227 15.5H5.22727C4.4114 15.5 3.75 14.8704 3.75 14.0938V11.75ZM5 4C4.17157 4 3.5 4.67157 3.5 5.5V10.25H1.5V2H14.75L14.75 4H5ZM11.875 12.375C13.2557 12.375 14.375 11.2557 14.375 9.875C14.375 8.49429 13.2557 7.375 11.875 7.375C10.4943 7.375 9.375 8.49429 9.375 9.875C9.375 11.2557 10.4943 12.375 11.875 12.375Z" fill="white" />
                                    </svg>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Payouts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7625 6.16247C12.9091 6.2765 13.0073 6.44166 13.0375 6.62496C13.0642 6.80556 13.0194 6.98947 12.9125 7.13746L8.22498 13.3875C8.16002 13.4774 8.07423 13.5503 7.97496 13.5999C7.87393 13.6499 7.76268 13.6756 7.64999 13.675C7.49764 13.6734 7.34941 13.6254 7.22499 13.5375C7.14976 13.479 7.08614 13.4069 7.03746 13.3249C6.98424 13.2464 6.95003 13.1565 6.93748 13.0625C6.92497 12.9712 6.92497 12.8787 6.93748 12.7875C6.96642 12.6983 7.00856 12.6141 7.06249 12.5375L11.75 6.28747C11.807 6.21251 11.8784 6.14959 11.9599 6.10238C12.0415 6.05518 12.1316 6.02463 12.225 6.01247H12.3375C12.4922 6.0123 12.6422 6.06525 12.7625 6.16247Z" fill="white" />
                                        <path d="M11.7977 10.9404C11.965 10.8718 12.1442 10.8368 12.325 10.8375C12.5059 10.8368 12.6851 10.8718 12.8524 10.9404C13.0197 11.009 13.1718 11.11 13.3 11.2375C13.4915 11.4301 13.6217 11.6751 13.6742 11.9416C13.7266 12.2082 13.6989 12.4842 13.5946 12.735C13.4903 12.9858 13.3141 13.2001 13.0881 13.3509C12.8622 13.5016 12.5966 13.5821 12.325 13.5821C12.0534 13.5821 11.7879 13.5016 11.5619 13.3509C11.336 13.2001 11.1597 12.9858 11.0554 12.735C10.9511 12.4842 10.9234 12.2082 10.9759 11.9416C11.0283 11.6751 11.1585 11.4301 11.35 11.2375C11.4782 11.11 11.6304 11.009 11.7977 10.9404Z" fill="white" />
                                        <path d="M8.61256 8.50001C8.86905 8.24032 9.01287 7.89002 9.01287 7.52501C9.01287 7.16001 8.86905 6.80971 8.61256 6.55001C8.35286 6.29352 8.00256 6.1497 7.63756 6.1497C7.27255 6.1497 6.92225 6.29352 6.66256 6.55001C6.40397 6.8086 6.2587 7.15932 6.2587 7.52501C6.2587 7.89071 6.40397 8.24142 6.66256 8.50001C6.92115 8.7586 7.27186 8.90387 7.63756 8.90387C8.00325 8.90387 8.35397 8.7586 8.61256 8.50001Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4 10.2625L19.0875 11.7875C19.2286 12.0927 19.2971 12.4264 19.2875 12.7625C19.29 13.0899 19.2217 13.4139 19.0875 13.7125C18.9612 14.0033 18.7736 14.2634 18.5375 14.475C18.3002 14.6878 18.0244 14.8533 17.725 14.9625L16.1875 15.55C16.0605 15.5947 15.9452 15.6673 15.85 15.7625C15.7548 15.8577 15.6822 15.973 15.6375 16.1L15.05 17.6375C14.9382 17.9414 14.7636 18.2182 14.5375 18.45C14.312 18.687 14.0395 18.8743 13.7375 19C13.4404 19.1319 13.1188 19.2001 12.7937 19.2001C12.4686 19.2001 12.1471 19.1319 11.85 19L10.35 18.3375C10.2306 18.2738 10.0978 18.2395 9.9625 18.2375C9.82819 18.2352 9.69524 18.2651 9.57497 18.325L8.07499 19.0125C7.70015 19.1845 7.28645 19.2543 6.87592 19.2148C6.46538 19.1753 6.07263 19.0279 5.73749 18.7875C5.34063 18.5131 5.03568 18.1253 4.86248 17.675L4.28749 16.1375C4.24278 16.0105 4.17016 15.8952 4.07497 15.8C3.97979 15.7048 3.86446 15.6322 3.73749 15.5875L2.1875 15C1.88784 14.8971 1.61297 14.7328 1.3805 14.5176C1.14803 14.3023 0.963058 14.0409 0.837479 13.75C0.703235 13.4514 0.635011 13.1274 0.637474 12.8C0.635232 12.4767 0.703487 12.1567 0.837479 11.8625L1.525 10.3625C1.62511 10.1138 1.62511 9.83611 1.525 9.58748L0.837479 8.0875C0.70508 7.78782 0.6329 7.46502 0.625 7.13749C0.624989 6.81163 0.688676 6.4889 0.812492 6.18748C0.932122 5.8853 1.11544 5.61246 1.34998 5.3875C1.58372 5.16392 1.86002 4.98963 2.16248 4.87499L3.7125 4.3C3.83919 4.24885 3.95404 4.17224 4.04999 4.07497C4.14189 3.98198 4.21414 3.87149 4.26247 3.75L4.83749 2.19997C4.94604 1.89156 5.1259 1.61317 5.36247 1.38748C5.58795 1.15046 5.86045 0.963131 6.16249 0.837479C6.46077 0.709908 6.78183 0.64415 7.10625 0.64415C7.43066 0.64415 7.75168 0.709908 8.04996 0.837479L9.54998 1.525C9.79861 1.62511 10.0763 1.62511 10.325 1.525L11.825 0.837479C12.1208 0.706666 12.4392 0.634521 12.7625 0.625C13.0883 0.624989 13.4111 0.688676 13.7125 0.812492C14.0102 0.938645 14.2797 1.12306 14.5051 1.3549C14.7305 1.58675 14.9073 1.86131 15.025 2.16248L15.6125 3.7125C15.6608 3.83399 15.7331 3.94449 15.825 4.03748C15.9209 4.13474 16.0358 4.21131 16.1625 4.26247L17.7 4.83749C18.0003 4.93878 18.2769 5.10043 18.5125 5.3125C18.7489 5.52873 18.9364 5.79295 19.0625 6.08749C19.2028 6.38455 19.2755 6.70896 19.2755 7.03747C19.2755 7.36598 19.2028 7.69042 19.0625 7.98748L18.4 9.4875C18.3387 9.60725 18.3086 9.74052 18.3125 9.87499C18.3116 10.0092 18.3415 10.1417 18.4 10.2625ZM17.7125 12.3125L17.1 10.8625C16.9775 10.5614 16.922 10.2372 16.9375 9.91249C16.9467 9.57434 17.0276 9.242 17.175 8.93749L17.8625 7.43748C17.9503 7.1952 17.9503 6.92975 17.8625 6.68747C17.7584 6.44925 17.5656 6.26097 17.325 6.16249L15.775 5.5875C15.4545 5.47516 15.1638 5.29132 14.925 5.04997C14.6862 4.80899 14.5028 4.51896 14.3875 4.19998L13.8 2.64999C13.761 2.5269 13.6923 2.41528 13.6 2.32498C13.5115 2.2334 13.4051 2.16108 13.2875 2.1125C13.1719 2.05882 13.0461 2.03098 12.9187 2.03098C12.7914 2.03098 12.6655 2.05882 12.55 2.1125L11.05 2.79999C10.7396 2.9401 10.403 3.01254 10.0625 3.01254C9.72196 3.01254 9.38533 2.9401 9.07497 2.79999L7.575 2.1125C7.452 2.06233 7.32034 2.03681 7.1875 2.03747C7.06795 2.01253 6.94454 2.01253 6.82499 2.03747C6.58677 2.14158 6.39845 2.3344 6.29997 2.575L5.72498 4.12498C5.60313 4.42297 5.42484 4.69463 5.19997 4.925C4.96109 5.16635 4.67042 5.35015 4.34998 5.46249L2.79999 6.03748C2.66694 6.07912 2.54365 6.14714 2.43748 6.23749C2.34016 6.33605 2.25989 6.45009 2.19997 6.57497C2.11212 6.81726 2.11212 7.0827 2.19997 7.32498L2.8875 8.825C3.02761 9.13536 3.10005 9.47195 3.10005 9.81247C3.10005 10.153 3.02761 10.4896 2.8875 10.8L2.19997 12.3C2.15285 12.4158 2.12334 12.5379 2.11246 12.6625C2.11213 12.7912 2.13767 12.9188 2.1875 13.0375C2.23909 13.1535 2.31104 13.2594 2.39998 13.35C2.49568 13.4353 2.60572 13.503 2.72499 13.55L4.27498 14.1375C4.5947 14.2514 4.88506 14.4349 5.12505 14.6749C5.36503 14.9149 5.54864 15.2053 5.6625 15.525L6.23749 17.075C6.3402 17.3128 6.52716 17.5042 6.76247 17.6125C6.87922 17.6524 7.00159 17.6735 7.12498 17.675C7.25781 17.6756 7.38948 17.6502 7.51247 17.6L9.01249 16.9125C9.32285 16.7724 9.65948 16.6999 10 16.6999C10.3405 16.6999 10.6771 16.7724 10.9875 16.9125L12.4875 17.6C12.7298 17.6878 12.9952 17.6878 13.2375 17.6C13.4734 17.4903 13.6572 17.293 13.75 17.05L14.3375 15.5125C14.4498 15.192 14.6336 14.9014 14.875 14.6625C15.1106 14.4171 15.4023 14.2327 15.725 14.125L17.1875 13.5625C17.3068 13.5155 17.4168 13.4478 17.5125 13.3625C17.6014 13.2719 17.6734 13.166 17.725 13.05C17.7748 12.9313 17.8003 12.8037 17.8 12.675C17.7891 12.5505 17.7596 12.4282 17.7125 12.3125Z" fill="white" />
                                    </svg>

                                    <span class="flex-1 ms-3 whitespace-nowrap">Discounts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6125 13.25V14.7875C14.6142 14.8854 14.5963 14.9826 14.56 15.0736C14.5236 15.1645 14.4696 15.2473 14.4009 15.3171C14.3323 15.3869 14.2505 15.4423 14.1601 15.4802C14.0698 15.518 13.9729 15.5375 13.875 15.5375C13.6761 15.5375 13.4853 15.4585 13.3446 15.3178C13.204 15.1772 13.125 14.9864 13.125 14.7875V13.25C13.125 12.6267 12.8774 12.029 12.4367 11.5883C11.996 11.1476 11.3982 10.9 10.775 10.9H4.58747C3.96638 10.9033 3.37189 11.1523 2.93388 11.5927C2.49587 12.033 2.24997 12.6289 2.24998 13.25V14.7875C2.24998 14.9864 2.17098 15.1772 2.03033 15.3178C1.88967 15.4585 1.69888 15.5375 1.49997 15.5375C1.30106 15.5375 1.1103 15.4585 0.96965 15.3178C0.828998 15.1772 0.75 14.9864 0.75 14.7875V13.25C0.75 12.2322 1.15429 11.2561 1.87396 10.5365C2.59363 9.8168 3.5697 9.41247 4.58747 9.41247H10.775C11.2794 9.41082 11.7791 9.50898 12.2455 9.70125C12.7118 9.89351 13.1355 10.1761 13.4922 10.5328C13.8489 10.8894 14.1315 11.3132 14.3237 11.7795C14.516 12.2458 14.6141 12.7456 14.6125 13.25Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.64998 0.125C6.891 0.125 6.14906 0.350074 5.51799 0.771744C4.88691 1.19341 4.39505 1.79275 4.1046 2.49396C3.81415 3.19518 3.73814 3.96674 3.88621 4.71114C4.03428 5.45554 4.39979 6.13933 4.93647 6.67602C5.47316 7.2127 6.15691 7.57821 6.90131 7.72628C7.64571 7.87435 8.41732 7.79834 9.11853 7.50789C9.81974 7.21744 10.4191 6.72558 10.8407 6.0945C11.2624 5.46343 11.4875 4.72149 11.4875 3.96251C11.4842 2.94575 11.0788 1.97158 10.3599 1.25262C9.64091 0.533667 8.66674 0.128296 7.64998 0.125ZM7.64998 6.31251C7.1852 6.31251 6.73086 6.17469 6.3444 5.91647C5.95795 5.65825 5.65671 5.29123 5.47885 4.86182C5.30098 4.43242 5.25447 3.95991 5.34514 3.50406C5.43582 3.0482 5.65965 2.62944 5.9883 2.30079C6.31695 1.97214 6.73568 1.74834 7.19153 1.65767C7.64739 1.56699 8.11989 1.61351 8.5493 1.79137C8.9787 1.96924 9.34573 2.27047 9.60395 2.65693C9.86217 3.04338 9.99999 3.49772 9.99999 3.96251C9.99999 4.58577 9.75238 5.18348 9.31166 5.62419C8.87095 6.0649 8.27324 6.31251 7.64998 6.31251Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 13.25V14.7875C19.2516 14.8854 19.2338 14.9826 19.1975 15.0736C19.1612 15.1645 19.1071 15.2473 19.0385 15.3171C18.9698 15.3869 18.8879 15.4423 18.7976 15.4802C18.7073 15.518 18.6104 15.5375 18.5125 15.5375C18.3136 15.5375 18.1228 15.4585 17.9822 15.3178C17.8415 15.1772 17.7625 14.9864 17.7625 14.7875V13.25C17.7646 12.7285 17.5922 12.2213 17.2728 11.8091C16.9535 11.3969 16.5054 11.1032 16 10.975C15.8079 10.925 15.6434 10.8009 15.5427 10.6298C15.4419 10.4588 15.4131 10.2548 15.4625 10.0625C15.488 9.96802 15.5322 9.87955 15.5923 9.8023C15.6523 9.72504 15.7272 9.66051 15.8125 9.61248C15.9244 9.54173 16.0552 9.50686 16.1875 9.51249C16.2494 9.50036 16.3131 9.50036 16.375 9.51249C17.2029 9.72473 17.9358 10.2081 18.4569 10.8855C18.978 11.5629 19.2572 12.3954 19.25 13.25Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1625 3.975C16.1696 4.83288 15.8891 5.66838 15.3657 6.34813C14.8423 7.02787 14.1062 7.51265 13.275 7.725C13.1809 7.75027 13.0828 7.75664 12.9862 7.74377C12.8897 7.7309 12.7966 7.69899 12.7125 7.64997C12.5442 7.5455 12.4231 7.37963 12.375 7.18747C12.3497 7.09341 12.3433 6.99529 12.3562 6.89874C12.3691 6.80219 12.4009 6.70916 12.45 6.625C12.5554 6.45759 12.7209 6.33681 12.9125 6.28747C13.4166 6.15697 13.8631 5.86272 14.1818 5.45095C14.5005 5.03918 14.6735 4.53323 14.6735 4.0125C14.6735 3.49178 14.5005 2.98579 14.1818 2.57402C13.8631 2.16225 13.4166 1.868 12.9125 1.73749C12.7199 1.68279 12.5549 1.55791 12.45 1.38749C12.4003 1.3036 12.368 1.21052 12.3551 1.11387C12.3422 1.01722 12.349 0.918964 12.375 0.824979C12.3983 0.730336 12.4402 0.641265 12.4982 0.56291C12.5562 0.484555 12.6291 0.418496 12.7128 0.368513C12.7965 0.318529 12.8893 0.285601 12.9858 0.271696C13.0823 0.257791 13.1806 0.263171 13.275 0.287489C14.0958 0.497192 14.8242 0.972616 15.3465 1.63965C15.8688 2.30668 16.1557 3.12783 16.1625 3.975Z" fill="white" />
                                    </svg>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Audience</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.87506 10.5889C5.63445 10.5889 6.25006 9.97329 6.25006 9.2139C6.25006 8.45451 5.63445 7.8389 4.87506 7.8389C4.11567 7.8389 3.50006 8.45451 3.50006 9.2139C3.50006 9.97329 4.11567 10.5889 4.87506 10.5889Z" fill="white" />
                                        <path d="M9 5.4639C9 6.22329 8.38439 6.8389 7.625 6.8389C6.86561 6.8389 6.25 6.22329 6.25 5.4639C6.25 4.70451 6.86561 4.0889 7.625 4.0889C8.38439 4.0889 9 4.70451 9 5.4639Z" fill="white" />
                                        <path d="M12.3751 6.8389C13.1345 6.8389 13.7501 6.22329 13.7501 5.4639C13.7501 4.70451 13.1345 4.0889 12.3751 4.0889C11.6157 4.0889 11.0001 4.70451 11.0001 5.4639C11.0001 6.22329 11.6157 6.8389 12.3751 6.8389Z" fill="white" />
                                        <path d="M16.5 9.2139C16.5 9.97329 15.8844 10.5889 15.125 10.5889C14.3656 10.5889 13.75 9.97329 13.75 9.2139C13.75 8.45451 14.3656 7.8389 15.125 7.8389C15.8844 7.8389 16.5 8.45451 16.5 9.2139Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.375C4.875 19.375 0.625 15.125 0.625 10C0.625 4.875 4.875 0.625 10 0.625C15.125 0.625 19.375 4.375 19.375 9C19.375 12 16.875 14.5 13.875 14.5H12.125C11.75 14.5 11.375 14.875 11.375 15.25C11.375 15.5 11.5 15.625 11.625 15.75C12 16.125 12.125 16.625 12.125 17.125C12.125 18.375 11.125 19.375 10 19.375ZM10 2C5.625 2 2 5.625 2 10C2 14.375 5.625 18 10 18C10.375 18 10.75 17.625 10.75 17.25C10.75 17 10.625 16.875 10.5 16.75C10.125 16.375 10 15.875 10 15.375C10 14.25 11 13.25 12.125 13.25H13.875C16.125 13.25 18 11.375 18 9.125C18 5.125 14.375 2 10 2Z" fill="white" />
                                    </svg>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Appearance</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2   rounded-lg dark:text-white  hover:bg-white-100 hover:text-white-500 group">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8071 7.41667C18.6821 7.16667 18.4238 7 18.1405 7H11.0905L11.8655 0.816667C11.9071 0.5 11.7321 0.183333 11.4321 0.0583333C11.3405 0.0166667 11.2405 0 11.1488 0C10.9321 0 10.7238 0.0916667 10.5821 0.258333L1.83212 10.7583C1.64878 10.975 1.61545 11.2833 1.73212 11.5333C1.84878 11.7917 2.11545 11.9583 2.39045 11.9583H9.44045L8.66545 18.1333C8.63212 18.4583 8.80712 18.7667 9.09878 18.9C9.39878 19.025 9.74878 18.9417 9.95712 18.6917L18.7071 8.19167C18.8821 7.975 18.9238 7.675 18.8071 7.41667ZM10.4238 15.85L10.9905 11.3167C11.0155 11.1083 10.9488 10.9 10.8155 10.7417C10.6738 10.5917 10.4738 10.5 10.2655 10.5H3.94878L10.1071 3.10833L9.54045 7.63333C9.51545 7.84167 9.58212 8.05 9.72378 8.20833C9.85712 8.36667 10.0571 8.45833 10.2655 8.45833H16.5821L10.4238 15.85Z" fill="white" />
                                        </g>
                                    </svg>
                                    <span class="flex-1 ms-3 whitespace-nowrap">Plugins</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className='mt-auto'>
                        <a href="#" class="flex items-center p-2 gap-2.5  rounded-lg bg-grey-100  hover:bg-white-100 hover:text-white-500 group">
                            <div className='p-1.5 bg-white-100 rounded'>
                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00312 1.79727C2.42636 1.79727 1.80313 2.35527 1.80313 3.24727V16.7473C1.80313 17.6393 2.42636 18.1973 3.00312 18.1973H21.0031C21.5799 18.1973 22.2031 17.6393 22.2031 16.7473V13.8473H17.0032C14.8769 13.8473 13.1532 12.1236 13.1532 9.99727C13.1532 7.87097 14.8769 6.14727 17.0032 6.14727H22.2031V3.24727C22.2031 2.35527 21.5799 1.79727 21.0031 1.79727H3.00312ZM23.8031 6.14727V3.24727C23.8031 1.65398 22.6355 0.197266 21.0031 0.197266H3.00312C1.37075 0.197266 0.203125 1.65398 0.203125 3.24727V16.7473C0.203125 18.3405 1.37075 19.7973 3.00312 19.7973H21.0031C22.6355 19.7973 23.8031 18.3405 23.8031 16.7473V13.8473H23.8532V6.14727H23.8031ZM16.0032 9.94727C16.0032 9.47783 16.3837 9.09727 16.8532 9.09727H18.1532C18.6226 9.09727 19.0032 9.47783 19.0032 9.94727C19.0032 10.4167 18.6226 10.7973 18.1532 10.7973H16.8532C16.3837 10.7973 16.0032 10.4167 16.0032 9.94727ZM14.8532 9.99727C14.8532 8.80986 15.8158 7.84727 17.0032 7.84727H22.1532V12.1473H17.0032C15.8158 12.1473 14.8532 11.1847 14.8532 9.99727Z" fill="white" />
                                </svg>
                            </div>
                            <div>
                                <p className='text-xs font-normal'>Availble Credits</p>
                                <p className='text-base font-medium'>222.10</p>
                            </div>

                        </a>
                    </div>
                </div>
            </aside>

        </div>
    )
}

export default Sidebar