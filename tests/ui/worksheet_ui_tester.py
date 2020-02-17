from selenium import webdriver
from ui_tester import UITester

import chromedriver_binary


class WorksheetUITester(UITester):
    def __init__(self, driver, base_url, password):
        super().__init__('worksheet', driver, base_url, password)

    def run(self):
        self.login()
        self.wait_until_worksheet_loads()
        self.click_link('Small Worksheet [cl_small_worksheet]')
        self.switch_to_new_tab()
        self.wait_until_worksheet_loads()
        self.output_images('worksheet_container')
        self.compare_to_baselines()


# TEST
driver = webdriver.Chrome()
worksheet_tester = WorksheetUITester(
    driver, 'https://worksheets-dev.codalab.org', 'mn:EDQ,Dt6s8s3KE'
)
worksheet_tester.run()
