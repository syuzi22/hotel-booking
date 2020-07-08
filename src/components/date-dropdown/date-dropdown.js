import '@air-datepicker/css/datepicker.min.css';
import '@air-datepicker/js/datepicker.min.js';
import './date-dropdown.scss';

(function ($) {
    const appendButtonHtml = '<span class="date-dropdown__close">Применить</span>';

    $(".date-dropdown__start").each(function () {
        const self = this;

        $(self).datepicker({
            onShow: function (dp) {
                dp.$datepicker.closest(".date-dropdown").addClass("date-dropdown--open");

                if (dp.$datepicker.find(".date-dropdown__close").length === 0) {
                    dp.$datepicker
                        .find(".datepicker--buttons")
                        .append(appendButtonHtml)
                        .click(function (event) {
                            dp.hide();
                        });
                }
            },
            onHide: function () {
                $(".date-dropdown").removeClass("date-dropdown--open");
            },
            onSelect: function (fd, date, dp) {
                $(self).val(fd.split("-")[0]);
                const $end = $(self).closest(".date-dropdown").find(".date-dropdown__end");
                $end.val(fd.split("-")[1]);
            },
            classes: "date-dropdown__elem",
            clearButton: true,
            prevHtml: '<span class="date-dropdown__prev-next">arrow_back</span>',
            nextHtml: '<span class="date-dropdown__prev-next">arrow_forward</span>',
            offset: 5.5,
            navTitles: {
                days: "MM yyyy",
                months: "yyyy",
                years: "yyyy1 - yyyy2",
            },
            onRenderCell: function (date, cellType) {
                if (cellType == "day") {
                    const dp = $(self).data("datepicker") || {};
                    let myclasses = "date-dropdown__cell";
                    let dateArray = dp.selectedDates || [];
                    let dateFrom = -1;
                    let dateTo = -1;
                    let currentCell = date.getTime();
                    let dayOfWeek = date.getDay();
                    if (dateArray.length >= 2) {
                        dateFrom = dateArray[0].getTime();
                        dateTo = dateArray[1].getTime();
                    }
                    if (currentCell >= dateFrom && currentCell <= dateTo) {
                        myclasses += " date-dropdown__in-range";
                        if (dayOfWeek === 0) {
                            myclasses += " date-dropdown__rounded-right";
                        } else if (dayOfWeek === 1) {
                            myclasses += " date-dropdown__rounded-left";
                        }
                    }

                    if (dayOfWeek === 0) {
                        myclasses += " date-dropdown__rounded-right";
                    } else if (dayOfWeek === 1) {
                        myclasses += " date-dropdown__rounded-left";
                    }

                    if ((currentCell === dateFrom && dayOfWeek === 0) || (currentCell === dateTo && dayOfWeek === 1)) {
                        myclasses += " date-dropdown__not-rounded ";
                    }

                    return {
                        classes: myclasses,
                        html: `<div class="date-dropdown__date">${date.getDate()}</div>`,
                    };
                }
            },
        });

        $(self)
            .find(".date-dropdown__micons")
            .click(function () {
                const dp = $(self).data("datepicker");
                let isOpen = $(self).data("isOpen");
                if (isOpen) {
                    dp.hide();
                } else {
                    dp.show();
                }
                isOpen = !isOpen;
                $(self).data("isOpen", isOpen);
            });

        const $dp = $(self).data("datepicker");
        $(self)
            .closest(".date-dropdown")
            .find(".date-dropdown__end")
            .each(function () {
                $(this).click(function () {
                    if ($dp) {
                        $dp.show();
                    }
                });
            });
    });

    $(".datepicker-inline .datepicker--buttons")
        .append(appendButtonHtml)
        .click(function (event) {});
})($);
