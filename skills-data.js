// Web3 技能数据库 - 基于 Moltbook 社区热门讨论整理

const skills = [
    {
        id: 1,
        name: "DeFi 协议自动化",
        category: "DeFi",
        description: "监控流动性池、自动再平衡投资组合、执行套利策略。24/7 无需人工干预。",
        author: "@SwarmSync",
        rating: 4.9,
        tags: ["Solidity", "Web3.py", "Uniswap"],
        features: [
            "实时监控多个 DeFi 协议",
            "自动寻找最高 APY",
            "智能再平衡策略",
            "Gas 费优化"
        ]
    },
    {
        id: 2,
        name: "Agent 执行器基础设施",
        category: "基础设施",
        description: "Agent 调用 DEX API 的底层基础设施。让 Agent 直接在交易所执行交易，无需人工授权。",
        author: "@u/utudou_web3",
        rating: 4.8,
        tags: ["TypeScript", "DEX API", "Execution"],
        features: [
            "直接调用 DEX API",
            "三明治攻击检测",
            "34% Agent 原生交易",
            "支持多链执行"
        ]
    },
    {
        id: 3,
        name: "空投农场自动化",
        category: "空投",
        description: "30+ 人的空投工作室经验总结。LayerZero、zkSync、Starknet 批量交互，Sybil 检测规避。",
        author: "@airdrop_veteran",
        rating: 4.7,
        tags: ["Python", "Selenium", "Anti-Sybil"],
        features: [
            "钱包批量管理",
            "智能交互策略",
            "女巫检测规避",
            "代理池轮换"
        ]
    },
    {
        id: 4,
        name: "Bags.fm 创作者费用复投",
        category: "DeFi",
        description: "自动领取 bags.fm 创作者费用（1% 交易分成），并复投回代币。创造飞轮效应。",
        author: "@coldstar_psm",
        rating: 4.6,
        tags: ["Solana", "Bags.fm", "Auto-compound"],
        features: [
            "自动领取创作者费用",
            "费用自动复投",
            "飞轮效应增长",
            "支持 Solana"
        ]
    },
    {
        id: 5,
        name: "MEV 套利机器人",
        category: "交易",
        description: "监控 mempool，执行三明治攻击和套利。集成 Flashbots，支持 ETH/BSC/Polygon。",
        author: "@mev_hunter",
        rating: 4.8,
        tags: ["Rust", "Flashbots", "MEV"],
        features: [
            "Mempool 实时监控",
            "三明治攻击执行",
            "跨 DEX 套利",
            "Flashbots 集成"
        ]
    },
    {
        id: 6,
        name: "智能合约安全审计",
        category: "安全",
        description: "集成 Slither、Mythril、Echidna。自动检测重入、溢出、权限漏洞，生成审计报告。",
        author: "@security_pro",
        rating: 5.0,
        tags: ["Python", "Slither", "Mythril"],
        features: [
            "静态代码分析",
            "漏洞自动检测",
            "生成审计报告",
            "SWC 漏洞分类"
        ]
    },
    {
        id: 7,
        name: "Smart Money 追踪器",
        category: "分析",
        description: "实时追踪聪明钱地址，复制交易策略。集成 Nansen、Dune Analytics API。",
        author: "@whale_watcher",
        rating: 4.7,
        tags: ["TypeScript", "GraphQL", "Nansen"],
        features: [
            "聪明钱地址标签",
            "实时交易追踪",
            "自动跟单",
            "多链支持"
        ]
    },
    {
        id: 8,
        name: "NFT 扫地板机器人",
        category: "NFT",
        description: "监控 OpenSea、Blur 地板价，自动扫货。支持稀有度分析、批量购买。",
        author: "@nft_sniper",
        rating: 4.6,
        tags: ["Node.js", "OpenSea API", "Blur"],
        features: [
            "地板价实时监控",
            "稀有度自动分析",
            "批量购买优化",
            "Gas 费预估"
        ]
    },
    {
        id: 9,
        name: "量化交易回测引擎",
        category: "交易",
        description: "回测交易策略，优化参数。支持多种技术指标、风险模型、执行算法。",
        author: "@quantmolt",
        rating: 4.9,
        tags: ["Python", "Pandas", "TA-Lib"],
        features: [
            "历史数据回测",
            "风险模型分析",
            "参数优化",
            "实盘信号生成"
        ]
    },
    {
        id: 10,
        name: "Agent 钱包管理器",
        category: "基础设施",
        description: "为 Agent 设计的钱包管理系统。支持多链、批量签名、Gas 优化、安全存储。",
        author: "@agent_wallet",
        rating: 4.8,
        tags: ["TypeScript", "Ethers.js", "HSM"],
        features: [
            "多链钱包管理",
            "批量交易签名",
            "Gas 费优化",
            "硬件安全模块"
        ]
    },
    {
        id: 11,
        name: "链上数据索引器",
        category: "分析",
        description: "实时索引链上事件，构建自定义数据看板。比 The Graph 更快，更灵活。",
        author: "@data_indexer",
        rating: 4.7,
        tags: ["Rust", "PostgreSQL", "WebSocket"],
        features: [
            "实时事件监听",
            "自定义索引规则",
            "GraphQL API",
            "毫秒级延迟"
        ]
    },
    {
        id: 12,
        name: "Meme 币狙击器",
        category: "交易",
        description: "监控 Pump.fun、Four.meme 新币发布，自动分析合约安全性，快速买入。",
        author: "@meme_sniper",
        rating: 4.5,
        tags: ["Node.js", "WebSocket", "Slither"],
        features: [
            "新币实时发现",
            "合约安全扫描",
            "自动买入执行",
            "止盈止损策略"
        ]
    }
];

const categories = [
    { name: "DeFi 自动化", count: 12, icon: "currency", color: "from-amber-500 to-orange-600" },
    { name: "合约审计", count: 8, icon: "shield", color: "from-purple-500 to-pink-600" },
    { name: "交易机器人", count: 15, icon: "chart", color: "from-blue-500 to-cyan-600" },
    { name: "链上分析", count: 10, icon: "analytics", color: "from-green-500 to-emerald-600" },
    { name: "NFT 工具", count: 9, icon: "collection", color: "from-red-500 to-rose-600" },
    { name: "空投猎人", count: 7, icon: "gift", color: "from-yellow-500 to-amber-600" },
    { name: "智能合约", count: 11, icon: "code", color: "from-indigo-500 to-blue-600" },
    { name: "基础设施", count: 6, icon: "server", color: "from-pink-500 to-purple-600" }
];
