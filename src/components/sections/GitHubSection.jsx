import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/ThemeContext.jsx";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const GITHUB_USERNAME = "jpallam09";

export default function GitHubSection() {
    const { theme } = useContext(ThemeContext);

    const currentYear = new Date().getFullYear();
    const previousYear = currentYear - 1;
    const years = [previousYear, currentYear];

    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [contributions, setContributions] = useState([]);

    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const token = import.meta.env.VITE_GITHUB_TOKEN;
                const from = `${selectedYear}-01-01T00:00:00Z`;
                const to = `${selectedYear}-12-31T23:59:59Z`;

                const query = `
                query($username: String!, $from: DateTime!, $to: DateTime!) {
                  user(login: $username) {
                    contributionsCollection(from: $from, to: $to) {
                      commitContributionsByRepository {
                        contributions(first: 100) {
                          nodes {
                            occurredAt
                          }
                        }
                      }
                    }
                  }
                }
                `;

                const response = await fetch("https://api.github.com/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        query,
                        variables: { username: GITHUB_USERNAME, from, to },
                    }),
                });

                const result = await response.json();

                if (!result.data) {
                    console.error("GitHub API error:", result);
                    return;
                }

                const repos =
                    result.data.user.contributionsCollection
                        .commitContributionsByRepository;

                const commitMap = {};

                repos.forEach((repo) => {
                    repo.contributions.nodes.forEach((commit) => {
                        const date = commit.occurredAt.split("T")[0];

                        if (!commitMap[date]) {
                            commitMap[date] = 0;
                        }

                        commitMap[date]++;
                    });
                });

                const formattedDays = Object.keys(commitMap).map((date) => ({
                    date,
                    count: commitMap[date],
                }));

                setContributions(formattedDays);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchCommits();
    }, [selectedYear]);

    return (
        <section className="mt-12 w-full px-4 md:px-8">
            <div className="bg-card border border-border shadow-sm p-6 md:p-8 w-full max-w-7xl mx-auto">
                <header className="mb-6 text-center">
                    <h2 className="text-2xl font-bold border-b border-border pb-2 inline-block">
                        GitHub Commits
                    </h2>

                    <div className="mt-4 flex justify-center gap-4">
                        {years.map((y) => (
                            <button
                                key={y}
                                onClick={() => setSelectedYear(y)}
                                className={`px-3 py-1 rounded text-sm ${y === selectedYear
                                    ? "bg-card-foreground text-card"
                                    : "hover:bg-muted"
                                    }`}
                            >
                                {y}
                            </button>
                        ))}
                    </div>
                </header>

                <CalendarHeatmap
                    startDate={`${selectedYear}-01-01`}
                    endDate={`${selectedYear}-12-31`}
                    values={contributions}
                    gutterSize={2}
                    showWeekdayLabels
                    horizontal
                    styleForValue={(value) => {
                        const count = value?.count || 0;

                        // Official GitHub green shades
                        if (count === 0) return { fill: "#ebedf0" };
                        if (count <= 3) return { fill: "#9be9a8" };
                        if (count <= 6) return { fill: "#40c463" };
                        if (count <= 9) return { fill: "#30a14e" };
                        return { fill: "#216e39" };
                    }}
                />
            </div>
        </section>
    );
}
