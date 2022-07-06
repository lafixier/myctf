const app = new Vue({
    el: "#app",
    data: {
        activeProblemModalId: null,
        categories: [
            {
                name: "Web",
                problems: [
                    {
                        name: "Right Click",
                        tags: ["Easy"],
                        description: "You cannot do that!",
                        link: {
                            href: "files/right_click",
                            name: "index.html",
                        },
                    },
                    {
                        name: "Shopping",
                        tags: ["Easy"],
                        description:
                            "I created a very simple shopping website.",
                        link: {
                            href: "files/shopping/shopping.zip",
                            name: "shopping.zip",
                        },
                    },
                    {
                        name: "Pre Tag",
                        tags: ["Easy"],
                        description: "One of HTML tags",
                        link: {
                            href: "files/pre_tag/pre_tag.zip",
                            name: "pre_tag.zip",
                        },
                    },
                ],
            },
        ],
    },
    mounted: function () {},
    methods: {
        keyDowned: function (event) {
            const keyName = event.key;
            switch (keyName) {
                case "Escape":
                    this.closeSubMenus();
                    break;
                case "Alt":
                    this.switchMenuSelected(
                        this.header.menuBar.menus[0].subMenusId
                    );
                default:
                    break;
            }
            event.stopPropagation();
            event.preventDefault();
            return false;
        },
        coverClicked: function () {
            this.closeSubMenus();
        },
        showCover: function () {
            this.isCoverShown = true;
        },
        hideCover: function () {
            this.isCoverShown = false;
        },
	openProblem: function(event) {
	    problemId = event
	    this.openProblemModal(problemId)
	},
        openProblemModal: function(modalId) {
            this.activeProblemModalId = modalId
        },
    },
});
