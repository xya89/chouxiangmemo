import Image from "next/image"

export function Icon_CollapseIcon() {
    return (
        <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
            />
        </svg>
    )
}

export function Icon_CrossIcon() {
    return (
        <svg
            className="h-8 me-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    )
}


export function Icon_TitleIcon() {
    return (
        <div className="dark:invert">
            <Image
                src='/webTitle.svg'
                width={100}
                height={90}
                alt="Title"
            />
        </div>
    )
}

export function Icon_AngryFace() {
    return (
        <svg id="emoji_angryFace" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
            <g id="color">
                <path fill="#D22F27" d="M48.8559,16c3-2,4-5,3-9c7,2,6,10,3,15" />
                <path fill="#D22F27" d="M23.1441,16c-3-2-4-5-3-9c-7,2-6,10-3,15" />
                <path fill="#EA5A47" d="M36,13c-12.6823,0-23,10.3177-23,23s10.3177,23,23,23c12.6822,0,23-10.3178,23-23 C59,23.3176,48.6822,13,36,13z" />
            </g>
            <g id="hair" />
            <g id="skin" />
            <g id="skin-shadow" />
            <g id="line">
                <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" />
                <path d="M30,32.9252c0,1.6567-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6553,1.3447-3,3-3C28.6552,29.9252,30,31.27,30,32.9252" />
                <path d="M48,32.9252c0,1.6567-1.3447,3-3,3s-3-1.3433-3-3c0-1.6553,1.3447-3,3-3S48,31.27,48,32.9252" />
                <line x1="23" x2="30" y1="25" y2="29" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                <line x1="49" x2="42" y1="25" y2="29" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M48.8559,16c3-2,4-5,3-9c7,2,6,10,3,15" />
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M23.1441,16c-3-2-4-5-3-9c-7,2-6,10-3,15" />
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M29.5,44c1.2841-0.6376,3.9847-1.0308,6.8421-0.9981c2.6235,0.03,4.9897,0.4146,6.1579,0.9981" />
            </g>
        </svg>
    )
}

export function Icon_ClassicalIcon() {
    return (
        <svg id="emoji" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-8">
            <g id="color">
                <polygon fill="#ea5a47" points="55 26 17 26 17 14 43.0198 14 55 14 55 26" />
                <path fill="#ea5a47" d="m56,24c0,11.0457-8.9543,20-20,20s-20-8.9543-20-20" />
                <path fill="#d22f27" d="m55,24v-10h-7.5698c.5966,6.3347.293,21.2038-13.788,29.849.7747.0911,1.5587.151,2.3578.151,11.0457,0,20-8.9543,20-20h-1Z" />
            </g>
            <g id="line">
                <line x1="20" x2="52" y1="67" y2="67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line x1="36" x2="36" y1="44" y2="67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m56,24c0,3.265-.7824,6.3473-2.1699,9.0696-3.3065,6.4874-10.0494,10.9304-17.8301,10.9304-11.0457,0-20-8.9543-20-20" />
                <line x1="16" x2="16" y1="5" y2="24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line x1="56" x2="56" y1="5" y2="24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line x1="16.5387" x2="55.5" y1="14.5" y2="14.5" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.9739" />
            </g>
        </svg>

    )
}

export function Icon_gender() {
    return (
        <svg id="emoji" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-8">
            <g id="color">
                <circle cx="35.9407" cy="33.2326" r="7.3827" fill="#fff" />
                <path fill="#9b9b9a" d="m45.61,26.34c2.321-2.306,6.985-6.894,6.985-6.894l1.28,7.389,3.533-3.18-.2799-11.29-12.47-.5298-2.817,3.787,8.585.2381s-3.998,7.94-7.595,7.698c-2.777-.1869-5.804-3.313-14.08-.1371-.9304.3571.8694-2.861.8694-2.861l-2.743-2.53-1.784,1.361-3.58-3.464,4.923-.8152-3.216-3.093-8.536.1607-.4431,7.519,3.885,3.352.4212-4.337,3.311,3.487-1.149,2.551,2.398,2.197,2.011-1.686s1.495.8407,1.319,1.477c-.789,2.858-4.036,9.207,1.219,14.77,1.702,1.8,5.359,1.107,6.717,3.179,1.118,1.706.1931,6.115.1931,6.115l-6.072.5056.0946,3.36,5.858.3832.1537,4.992,3.314-.3607.6534-4.658,5.148-.1054.0687-3.207-5.285-.5914s-1.6-4.484-.5743-6.343c1.159-2.099,4.829-1.463,6.407-3.269,5.663-6.48,2.194-13.02,1.273-15.17h0s0,0,0,0m-15.19,12.42c-2.62-2.62-2.62-8.497,0-11.12s8.497-2.62,11.12,0,2.62,8.497,0,11.12-8.497,2.62-11.12,0" />
            </g>
            <g id="line">
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m25.09,19.8l1.855-1.856,2.692,2.668-1.851,1.882m-2.701,2.68l-2.016,2.006-2.692-2.692,2.012-2.009" />
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m57.44,11.95h-12.39l-3.77,3.768h9.695l-8.269,8.263m2.692,2.689l8.27-8.259v9.686l3.77-3.768v-12.38" />
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m14.56,11.92v8.147l3.37,3.368v-5.455l4.502,4.498m2.697,2.695l1.564,1.563m2.691-2.69l-1.555-1.554m-2.696-2.694l-4.508-4.51h6.128l-3.37-3.368h-8.824" />
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m38.19,44.65v6.619h5.669v3.578h-5.669v5.245h-3.739v-5.245h-5.669v-3.578h5.669v-6.619" />
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m29.38,24.05c1.868-1.332,4.155-2.115,6.624-2.115,2.405,0,4.637.7432,6.478,2.012m2.865,2.836c1.309,1.857,2.077,4.121,2.077,6.565,0,5.506-3.902,10.1-9.094,11.18m-3.88.1325c-5.573-.757-9.868-5.531-9.868-11.31,0-2.461.7792-4.739,2.105-6.603" />
                <circle cx="35.973" cy="33.34" r="7.716" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
            </g>
        </svg>
    )
}

export function Icon_clownFace() {
    return (
        <svg id="emoji" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-8">
            <g id="color">
                <path fill="#D22F27" d="M13.8451,27.9329c0,0-2.047-1.4682-0.6019-3.1236c0,0-2.2788-2.0129-0.4281-3.9039 c0,0-1.2382-4.0732,2.1382-4.309c0,0-0.3899-4.0721,4.079-3.5985c0,0,2.5018-1.8015,4.3561,0.2489c0,0,2.5324-1.6079,3.8427,0.4026" />
                <path fill="#D22F27" d="M58.1549,27.9329c0,0,2.047-1.4682,0.6019-3.1236c0,0,2.2788-2.0129,0.4281-3.9039 c0,0,1.2382-4.0732-2.1382-4.309c0,0,0.3899-4.0721-4.079-3.5985c0,0-2.5018-1.8015-4.3561,0.2489c0,0-2.5324-1.6079-3.8427,0.4026" />
                <circle cx="36" cy="36" r="23" fill="#FFFFFF" />
                <path fill="#D22F27" d="M49.8069,46.5463c0,0-1.58,8.43-13.81,8.76c-12.18-0.44-13.81-8.76-13.81-8.76 c-0.46-1.73-1.2401-5.76,2.28-3.81c2.7,1.5,5.38,4.37,11.53,4.55c6.16-0.18,8.83-3.05,11.53-4.55 C51.0469,40.7863,50.2769,44.8163,49.8069,46.5463z" />
                <path fill="#FFFFFF" d="M35.9981,52.7344c-6.0618,0-9.9298-3.3099-10.9113-4.9147s0.5505-1.1552,0.866-1.003 c2.3137,1.1164,4.0412,2.6979,10.0453,2.9036 M35.9981,52.7344c6.0618,0,9.9298-3.3099,10.9113-4.9147s-0.5505-1.1552-0.866-1.003 c-2.3138,1.1164-4.0412,2.6979-10.0453,2.9036" />
            </g>
            <g id="hair" />
            <g id="skin" />
            <g id="skin-shadow" />
            <g id="line">
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M23.4432,21.1746c2.8989-1.5543,6.1935-1.6129,8.6558,0" />
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M39.901,21.1746c2.8989-1.5543,6.1935-1.6129,8.6558,0" />
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M49.8078,46.5463c0,0-1.58,8.43-13.81,8.76c-12.18-0.44-13.81-8.76-13.81-8.76c-0.46-1.73-1.2401-5.76,2.28-3.81 c2.7,1.5,5.38,4.37,11.53,4.55c6.16-0.18,8.83-3.05,11.53-4.55C51.0478,40.7863,50.2778,44.8163,49.8078,46.5463z" />
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M13.8451,27.9329c0,0-2.047-1.4682-0.6019-3.1236c0,0-2.2788-2.0129-0.4281-3.9039c0,0-1.2382-4.0732,2.1382-4.309 c0,0-0.3899-4.0721,4.079-3.5985c0,0,2.5018-1.8015,4.3561,0.2489c0,0,2.5324-1.6079,3.8427,0.4026" />
                <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M58.1549,27.9329c0,0,2.047-1.4682,0.6019-3.1236c0,0,2.2788-2.0129,0.4281-3.9039c0,0,1.2382-4.0732-2.1382-4.309 c0,0,0.3899-4.0721-4.079-3.5985c0,0-2.5018-1.8015-4.3561,0.2489c0,0-2.5324-1.6079-3.8427,0.4026" />
                <ellipse cx="27.7711" cy="30.818" rx="3.5" ry="6.3045" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" />
                <ellipse cx="44.2289" cy="30.8216" rx="3.5" ry="6.3045" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" />
                <circle cx="36" cy="38.9779" r="2.7351" />
            </g>
            <g id="color-foreground">
                <ellipse cx="27.7711" cy="30.818" rx="3.5" ry="6.3045" fill="none" stroke="#92D3F5" stroke-miterlimit="10" stroke-width="2.1" />
                <ellipse cx="44.2289" cy="30.8216" rx="3.5" ry="6.3045" fill="none" stroke="#92D3F5" stroke-miterlimit="10" stroke-width="2.1" />
                <path d="M30.2676,30.816c0,3.04-1.32,5.31-2.5,5.31s-2.5-2.27-2.5-5.31c0-3.03,1.32-5.3,2.5-5.3S30.2676,27.7861,30.2676,30.816z" />
                <path d="M46.7276,30.8261c0,3.03-1.32,5.3-2.5,5.3s-2.5-2.27-2.5-5.3c0-3.04,1.32-5.31,2.5-5.31S46.7276,27.7861,46.7276,30.8261z" />
                <circle cx="36.0563" cy="38.9779" r="2.7351" fill="#D22F27" />
            </g>
        </svg>

    )
}

export function Icon_flower() {
    return (
        <svg id="emoji" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-8">
            <g id="color">
                <path fill="#FCEA2B" stroke="none" d="M53.1986,26.1283c-0.2578-0.3518-0.2578-0.8302,0-1.182l0.781-1.066 c1.7236-2.3562,1.2108-5.6636-1.1455-7.3873c-1.0641-0.7784-2.3808-1.1311-3.6915-0.9887l-1.313,0.143 c-0.4329,0.0447-0.8455-0.1936-1.023-0.591l-0.533-1.208c-1.1787-2.6708-4.2994-3.8805-6.9702-2.7018 c-1.206,0.5322-2.1696,1.4958-2.7018,2.7018l-0.533,1.209c-0.1785,0.3963-0.5906,0.6339-1.023,0.59l-1.313-0.143 c-2.9024-0.3146-5.5102,1.7833-5.8248,4.6857c-0.142,1.3104,0.2106,2.6265,0.9888,3.6903l0.781,1.066 c0.2578,0.3518,0.2578,0.8302,0,1.182l-0.78,1.066c-1.7242,2.3551-1.2128,5.6621,1.1423,7.3863 c1.0645,0.7794,2.3821,1.1324,3.6937,0.9897l1.313-0.143c0.4331-0.0472,0.8469,0.1915,1.023,0.59l0.533,1.208 c0.1352,0.2987,0.2972,0.5845,0.484,0.854c0.043,0.063,0.088,0.122,0.133,0.182c0.1707,0.2319,0.3604,0.4494,0.567,0.65 c0.019,0.019,0.037,0.039,0.056,0.057c0.5022,0.4685,1.0932,0.8316,1.738,1.068l0,0c0.5941,0.2236,1.2233,0.3394,1.858,0.342 c2.0993,0.0169,4.0045-1.2253,4.836-3.153l0.533-1.208c0.1757-0.3989,0.5896-0.638,1.023-0.591l1.313,0.143 c2.9023,0.3152,5.5106-1.7821,5.8258-4.6845c0.1423-1.3108-0.2103-2.6274-0.9888-3.6915L53.1986,26.1283z" />
                <path fill="#5C9E31" stroke="none" d="M10.0786,28.3983c-0.151,2.092-0.178,7.231,2.687,10.738s7.906,4.508,9.985,4.774 c0.151-2.092,0.178-7.232-2.687-10.738l0,0C17.1886,29.6553,12.1556,28.6643,10.0786,28.3983z" />
                <path fill="#F1B31C" stroke="none" d="M41.4376,21.5373c-2.2091,0-4,1.7909-4,4s1.7909,4,4,4s4-1.7909,4-4S43.6468,21.5373,41.4376,21.5373z" />
            </g>
            <g id="hair" />
            <g id="skin" />
            <g id="skin-shadow" />
            <g id="line">
                <circle cx="41.4376" cy="25.5373" r="5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.8366,32.5393 c3.992,4.886,2.805,12.462,2.805,12.462s-7.66-0.347-11.653-5.233s-2.805-12.462-2.805-12.462S16.8436,27.6533,20.8366,32.5393z" />
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M32.0106,41.0902 c-3.438,3.548-7.676,10.246-5.829,20.735" />
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M47.1886,13.4433 l0.533,1.209l1.313-0.143c3.4507-0.3755,6.5525,2.1174,6.9281,5.5682c0.1698,1.5599-0.2501,3.1268-1.177,4.3928l-0.78,1.066 l0.78,1.066c2.0506,2.8007,1.4425,6.7334-1.3582,8.784c-1.266,0.9269-2.833,1.3468-4.3928,1.177l-1.313-0.143l-0.533,1.209 c-1.4014,3.1756-5.1118,4.6139-8.2875,3.2125c-1.434-0.6328-2.5797-1.7786-3.2125-3.2125l-0.533-1.209l-1.313,0.143 c-3.4507,0.3755-6.5525-2.1174-6.928-5.5682c-0.1697-1.5599,0.2501-3.1268,1.177-4.3928l0.78-1.066l-0.78-1.066 c-2.0506-2.8007-1.4425-6.7334,1.3582-8.784c1.266-0.9269,2.833-1.3468,4.3928-1.177l1.313,0.143l0.533-1.209 c1.4014-3.1756,5.1118-4.6139,8.2875-3.2125C45.4101,10.8635,46.5558,12.0093,47.1886,13.4433z" />
            </g>
        </svg>

    )
}

export function Icon_noodle() {
    return (
        <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-8">
            <g id="color">
                <path fill="#d22f27" d="m62.92,35.0029c.0686-1.0352-.7149-1.9301-1.7502-1.9988-.0413-.0027-.0826-.0041-.124-.0041H11.0529c-1.0895-.002-1.9743.8795-1.9764,1.969-.0001.0542.002.1083.0064.1623.857,9.7287,7.53,17.9843,16.7945,21.7238v5.4866c.0335.9444.8226,1.6848,1.7672,1.6583h16.7108c.9445.0264,1.7335-.714,1.767-1.6583v-4.8424c9.712-3.3783,16.0713-12.1093,16.7976-22.4964Z" />
            </g>
            <g id="line">
                <line x1="61.4336" x2="17.4336" y1="21" y2="21" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line x1="61.4336" x2="17.4336" y1="13" y2="13" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line x1="34.2773" x2="34.4336" y1="10.8125" y2="33" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8409" />
                <line x1="28.2773" x2="28.4336" y1="10.8125" y2="33" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8409" />
                <line x1="22.2773" x2="22.4336" y1="10.8125" y2="33" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8409" />
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m62.92,35.0029c.0686-1.0352-.7149-1.9301-1.7502-1.9988-.0413-.0027-.0826-.0041-.124-.0041H11.0529c-1.0895-.002-1.9743.8795-1.9764,1.969-.0001.0542.002.1083.0064.1623.857,9.7287,7.53,17.9843,16.7945,21.7238v5.4866c.0335.9444.8226,1.6848,1.7672,1.6583h16.7108c.9445.0264,1.7335-.714,1.767-1.6583v-4.8424c9.712-3.3783,16.0713-12.1093,16.7976-22.4964Z" />
            </g>
            <g id="color-foreground">
                <line x1="34.2773" x2="34.4336" y1="10.8125" y2="33" fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8409" />
                <line x1="28.2773" x2="28.4336" y1="10.8125" y2="33" fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8409" />
                <line x1="22.2773" x2="22.4336" y1="10.8125" y2="33" fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8409" />
            </g>
        </svg>

    )
}

export function Icon_GI() {
    return (
        <svg id="emoji" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-8">
            <g id="color">
                <path fill="#EA5A47" stroke="none" d="M35.5661,6.4066c-16.0162,0-29,12.9838-29,29c0,16.0164,12.9838,29,29,29s29-12.9836,29-29 C64.5661,19.3903,51.5823,6.4066,35.5661,6.4066z M35.5661,55.4066c-11.0457,0-20-8.9543-20-20s8.9543-20,20-20s20,8.9543,20,20 S46.6118,55.4066,35.5661,55.4066z" />
            </g>
            <g id="hair" />
            <g id="skin" />
            <g id="skin-shadow" />
            <g id="line">
                <circle cx="35.7952" cy="35.9372" r="29" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <circle cx="35.7952" cy="35.9372" r="20" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>

    )
}