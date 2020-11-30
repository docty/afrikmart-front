import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	$("#side-menu").metisMenu();
  	$(".vertical-menu-btn").on("click", function (e) {
            e.preventDefault(), 
            $("body").toggleClass("sidebar-enable"), 
            992 <= $(window).width() ? $("body").toggleClass("vertical-collpsed") : $("body").removeClass("vertical-collpsed");
        }),
        $("#sidebar-menu a").each(function () {
            var e = window.location.href.split(/[?#]/)[0];
            this.href == e &&
                ($(this).addClass("active"),
                $(this).parent().addClass("mm-active"),
                $(this).parent().parent().addClass("mm-show"),
                $(this).parent().parent().prev().addClass("mm-active"),
                $(this).parent().parent().parent().addClass("mm-active"),
                $(this).parent().parent().parent().parent().addClass("mm-show"),
                $(this).parent().parent().parent().parent().parent().addClass("mm-active"));
        }),
        $(document).ready(function () {
            var e;
            0 < $("#sidebar-menu").length && 300 < (e = $("#sidebar-menu .mm-active .active").offset().top) && ((e -= 300), $(".simplebar-content-wrapper").animate({ scrollTop: e }, "slow"));
        });
  }

}
